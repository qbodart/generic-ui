import { RandomStringGenerator } from '@generic-ui/hermes';
import { ItemEntity } from './item/item.entity';
import { StructureSourceItemEditedAggregateEvent } from '../core/origin/edit/structure.source-item-edited.aggregate-event';
import { StructureOriginChangedAggregateEvent } from '../core/origin/structure.origin-changed.aggregate-event';
import { ItemEntityId } from './item/item.entity-id';
import { RowSelectionMode, RowSelectionType } from '../../../formation/src/api/row-selected/row-selection';
export class SourceManager {
    constructor(formationManager) {
        this.events = [];
        this.loading = false;
        this.fetched = false;
        this.entities = [];
        // Entities after filtering, searching
        this.preparedEntities = [];
        this.slicedEntities = [];
        this.formationManager = formationManager;
        this.events.push(...this.formationManager.init(true, RowSelectionMode.SINGLE, RowSelectionType.ROW));
    }
    isLoading() {
        return this.loading;
    }
    setLoading(enabled) {
        this.loading = enabled;
    }
    setEntities(ent) {
        this.entities = ent;
        this.recalculatePositions();
    }
    getEntities() {
        return this.entities;
    }
    setPreparedEntities() {
        this.preparedEntities = Array.from(this.entities);
    }
    getPreparedEntities() {
        return this.preparedEntities;
    }
    setSlicedEntities(ent) {
        this.slicedEntities = ent;
    }
    getSlicedEntities() {
        return this.slicedEntities;
    }
    setOrigin(items = [], structureId) {
        this.origin = this.convertItems(items);
        return this.createOriginChangedEvent(structureId);
    }
    setConvertedOrigin(items = [], structureId) {
        this.origin = Array.from(items);
        return this.createOriginChangedEvent(structureId);
    }
    getOrigin() {
        return this.origin;
    }
    editOriginItem(itemId, value, field, structureId) {
        const item = this.findOriginItem(itemId), itemBeforeChange = item.clone();
        if (item) {
            item.sourceItem[field.getAccessor()] = value;
            item.bumpVersion();
        }
        return [
            new StructureSourceItemEditedAggregateEvent(structureId, itemBeforeChange, item.clone()),
            this.createOriginChangedEvent(structureId)
        ];
    }
    deleteAllSelected(structureId) {
        let events = [];
        const itemEntityIds = this.formationManager.getSelectedItemIds();
        itemEntityIds.forEach((itemEntityId) => {
            events = events.concat(this.deleteOriginItemByItemId(itemEntityId, structureId));
        });
        return events;
    }
    deleteOriginItem(payload, structureId) {
        if (payload instanceof ItemEntityId) {
            return this.deleteOriginItemByItemId(payload, structureId);
        }
        else if (Array.isArray(payload)) {
            let events = [];
            payload.forEach((item) => {
                events = events.concat(this.deleteOneOriginItem(item, structureId));
            });
            return events;
        }
        else if (Number.isInteger(payload)) {
            return this.deleteOriginItemByIndex(payload, structureId);
        }
        else {
            return [];
        }
    }
    addOriginItem(item, structureId) {
        this.origin.push(item);
        return [this.createOriginChangedEvent(structureId)];
    }
    setCustomConfig(config) {
        return this.formationManager.setCustomConfig(config);
    }
    selectCustom(id) {
        this.formationManager.selectCustom(id, this.getEntities());
    }
    selectAll() {
        this.formationManager.selectAll(this.getEntities().map(entity => entity.getId()));
    }
    unselectAll() {
        this.formationManager.unselectAll();
    }
    selectByIndex(indexes) {
        this.formationManager.selectByIndex(indexes, this.getEntities().map(e => e.getId()));
    }
    selectByIds(ids) {
        this.formationManager.selectByIds(ids, this.getEntities());
    }
    reSelect() {
        this.formationManager.reSelectByIds(this.getEntities());
    }
    setSelectedRows(selectedRows) {
        this.formationManager.selectRows(selectedRows, this.getEntities().map(e => e.getId()));
    }
    toggleRow(itemId, type) {
        this.formationManager.toggleRow(itemId, type, this.getEntities().map(e => e.getId()));
    }
    getFormation() {
        return this.formationManager;
    }
    convertItems(items) {
        return items.map((item, index) => {
            return new ItemEntity(new ItemEntityId(RandomStringGenerator.generate()), item, index);
        });
    }
    createOriginChangedEvent(structureId) {
        return new StructureOriginChangedAggregateEvent(structureId, this.origin);
    }
    findOriginItem(itemId) {
        return this.origin.find((item) => item.getId().toString() === itemId);
    }
    findOriginItemIndex(itemId) {
        return this.origin.findIndex((item) => item.getId().toString() === itemId);
    }
    recalculatePositions() {
        this.entities.forEach((ent, index) => {
            ent.setPosition(index);
        });
    }
    deleteOneOriginItem(item, structureId) {
        if (item instanceof ItemEntityId) {
            return this.deleteOriginItemByItemId(item, structureId);
        }
        else if (Number.isInteger(item)) {
            return this.deleteOriginItemByIndex(item, structureId);
        }
        else {
            return [];
        }
    }
    deleteOriginItemByItemId(itemId, structureId) {
        const index = this.findOriginItemIndex(itemId.toString());
        return this.deleteOriginItemByIndex(index, structureId);
    }
    deleteOriginItemByIndex(index, structureId) {
        if (index > -1) {
            const removedItems = this.origin.splice(index, 1);
            if (removedItems.length > 0) {
                for (const element of removedItems) {
                    this.formationManager.unselectRow(element.getId());
                }
                this.formationManager.calculateAllSelected(removedItems.map((f) => f.getId()));
                this.formationManager.calculateAllUnselected();
            }
            return [
                this.createOriginChangedEvent(structureId)
            ];
        }
        return [];
    }
    deleteManyOriginItemByIndex(indexes, structureId) {
        let events = [];
        indexes.forEach((index) => {
            events = events.concat(this.deleteOriginItemByIndex(index, structureId));
        });
        return events;
    }
    deleteManyOriginItemByItemID(itemIds, structureId) {
        let events = [];
        itemIds.forEach((itemId) => {
            events = events.concat(this.deleteOriginItemByItemId(itemId, structureId));
        });
        return events;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvZG9tYWluL3NvdXJjZS5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBa0IscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEQsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDM0gsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFFL0csT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBTTNHLE1BQU0sT0FBTyxhQUFhO0lBbUJ6QixZQUFZLGdCQUFrQztRQWpCOUMsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUVoQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFJekIsYUFBUSxHQUFzQixFQUFFLENBQUM7UUFFekMsc0NBQXNDO1FBQzlCLHFCQUFnQixHQUFzQixFQUFFLENBQUM7UUFFekMsbUJBQWMsR0FBc0IsRUFBRSxDQUFDO1FBSzlDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDZixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FDbEYsQ0FBQztJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFzQjtRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxHQUFzQjtRQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztJQUMzQixDQUFDO0lBRUQsaUJBQWlCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDO0lBRUQsU0FBUyxDQUFDLFFBQW9CLEVBQUUsRUFBRSxXQUF3QjtRQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELGtCQUFrQixDQUFDLFFBQTJCLEVBQUUsRUFBRSxXQUF3QjtRQUN6RSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFjLEVBQUUsS0FBVSxFQUFFLEtBQWtCLEVBQUUsV0FBd0I7UUFFdEYsTUFBTSxJQUFJLEdBQWUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFDbkQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWpDLElBQUksSUFBSSxFQUFFO1lBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDN0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25CO1FBRUQsT0FBTztZQUNOLElBQUksdUNBQXVDLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN4RixJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDO1NBQzFDLENBQUM7SUFDSCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsV0FBd0I7UUFDekMsSUFBSSxNQUFNLEdBQXVDLEVBQUUsQ0FBQztRQUVwRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUVqRSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBMEIsRUFBRSxFQUFFO1lBQ3BELE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsRixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUVELGdCQUFnQixDQUFDLE9BQW9FLEVBQUUsV0FBd0I7UUFFOUcsSUFBSSxPQUFPLFlBQVksWUFBWSxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUMzRDthQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUVsQyxJQUFJLE1BQU0sR0FBdUMsRUFBRSxDQUFDO1lBRXBELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUEyQixFQUFFLEVBQUU7Z0JBQy9DLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyRSxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sTUFBTSxDQUFDO1NBRWQ7YUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzFEO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQztTQUNWO0lBQ0YsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFTLEVBQUUsV0FBd0I7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxlQUFlLENBQUMsTUFBc0M7UUFDckQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxZQUFZLENBQUMsRUFBMkI7UUFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELFNBQVM7UUFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBc0I7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFrQjtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGVBQWUsQ0FBQyxZQUEyQjtRQUMxQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWMsRUFBRSxJQUF5QjtRQUNsRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQWlCO1FBQ3JDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUM3QyxPQUFPLElBQUksVUFBVSxDQUFDLElBQUksWUFBWSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVPLHdCQUF3QixDQUFDLFdBQXdCO1FBQ3hELE9BQU8sSUFBSSxvQ0FBb0MsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFTyxjQUFjLENBQUMsTUFBYztRQUNwQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxNQUFjO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVPLG9CQUFvQjtRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQWUsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUN4RCxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVPLG1CQUFtQixDQUFDLElBQTJCLEVBQUUsV0FBd0I7UUFFaEYsSUFBSSxJQUFJLFlBQVksWUFBWSxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN4RDthQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDdkQ7YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7SUFDRixDQUFDO0lBRU8sd0JBQXdCLENBQUMsTUFBb0IsRUFBRSxXQUF3QjtRQUU5RSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFMUQsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTyx1QkFBdUIsQ0FBQyxLQUFhLEVBQUUsV0FBd0I7UUFFdEUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZixNQUFNLFlBQVksR0FBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXJFLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzVCLEtBQUssTUFBTSxPQUFPLElBQUksWUFBWSxFQUFFO29CQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUNuRDtnQkFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDL0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixFQUFFLENBQUM7YUFDL0M7WUFFRCxPQUFPO2dCQUNOLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUM7YUFDMUMsQ0FBQztTQUNGO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRU8sMkJBQTJCLENBQUMsT0FBc0IsRUFBRSxXQUF3QjtRQUVuRixJQUFJLE1BQU0sR0FBdUMsRUFBRSxDQUFDO1FBRXBELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUNqQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDMUUsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFFTyw0QkFBNEIsQ0FBQyxPQUE0QixFQUFFLFdBQXdCO1FBRTFGLElBQUksTUFBTSxHQUF1QyxFQUFFLENBQUM7UUFFcEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRTtZQUN4QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDNUUsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uL2NvcmUvb3JpZ2luL2VkaXQvc3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vY29yZS9vcmlnaW4vc3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBGaWVsZEVudGl0eSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL3NyYy9kb21haW4vZmllbGQvZmllbGQuZW50aXR5JztcbmltcG9ydCB7IEl0ZW1FbnRpdHlJZCB9IGZyb20gJy4vaXRlbS9pdGVtLmVudGl0eS1pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25NYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vZm9ybWF0aW9uL3NyYy9kb21haW4vZm9ybWF0aW9uLm1hbmFnZXInO1xuaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2Zvcm1hdGlvbi9zcmMvZG9tYWluL3Jvdy1zZWxlY3QtdG9nZ2xlLXR5cGUnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZSwgUm93U2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL2Zvcm1hdGlvbi9zcmMvYXBpL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0aW9uJztcbmltcG9ydCB7IEZvcm1hdGlvbkN1c3RvbVNlbGVjdElkIH0gZnJvbSAnLi4vLi4vLi4vZm9ybWF0aW9uL3NyYy9hcGkvY3VzdG9tL2Zvcm1hdGlvbi5jdXN0b20tc2VsZWN0LmlkJztcbmltcG9ydCB7IEZvcm1hdGlvbkN1c3RvbVNlbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2Zvcm1hdGlvbi9zcmMvYXBpL2N1c3RvbS9mb3JtYXRpb24uY3VzdG9tLXNlbGVjdGlvbi5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvY29yZS9zdHJ1Y3R1cmUuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgU291cmNlTWFuYWdlciB7XG5cblx0ZXZlbnRzOiBBcnJheTxhbnk+ID0gW107XG5cblx0cHJpdmF0ZSBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBmZXRjaGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBvcmlnaW46IEFycmF5PEl0ZW1FbnRpdHk+O1xuXG5cdHByaXZhdGUgZW50aXRpZXM6IEFycmF5PEl0ZW1FbnRpdHk+ID0gW107XG5cblx0Ly8gRW50aXRpZXMgYWZ0ZXIgZmlsdGVyaW5nLCBzZWFyY2hpbmdcblx0cHJpdmF0ZSBwcmVwYXJlZEVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5PiA9IFtdO1xuXG5cdHByaXZhdGUgc2xpY2VkRW50aXRpZXM6IEFycmF5PEl0ZW1FbnRpdHk+ID0gW107XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25NYW5hZ2VyOiBGb3JtYXRpb25NYW5hZ2VyO1xuXG5cdGNvbnN0cnVjdG9yKGZvcm1hdGlvbk1hbmFnZXI6IEZvcm1hdGlvbk1hbmFnZXIpIHtcblx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIgPSBmb3JtYXRpb25NYW5hZ2VyO1xuXHRcdHRoaXMuZXZlbnRzLnB1c2goXG5cdFx0XHQuLi50aGlzLmZvcm1hdGlvbk1hbmFnZXIuaW5pdCh0cnVlLCBSb3dTZWxlY3Rpb25Nb2RlLlNJTkdMRSwgUm93U2VsZWN0aW9uVHlwZS5ST1cpXG5cdFx0KTtcblx0fVxuXG5cdGlzTG9hZGluZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5sb2FkaW5nO1xuXHR9XG5cblx0c2V0TG9hZGluZyhlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5sb2FkaW5nID0gZW5hYmxlZDtcblx0fVxuXG5cdHNldEVudGl0aWVzKGVudDogQXJyYXk8SXRlbUVudGl0eT4pOiB2b2lkIHtcblx0XHR0aGlzLmVudGl0aWVzID0gZW50O1xuXHRcdHRoaXMucmVjYWxjdWxhdGVQb3NpdGlvbnMoKTtcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcztcblx0fVxuXG5cdHNldFByZXBhcmVkRW50aXRpZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5wcmVwYXJlZEVudGl0aWVzID0gQXJyYXkuZnJvbSh0aGlzLmVudGl0aWVzKTtcblx0fVxuXG5cdGdldFByZXBhcmVkRW50aXRpZXMoKTogQXJyYXk8SXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnByZXBhcmVkRW50aXRpZXM7XG5cdH1cblxuXHRzZXRTbGljZWRFbnRpdGllcyhlbnQ6IEFycmF5PEl0ZW1FbnRpdHk+KSB7XG5cdFx0dGhpcy5zbGljZWRFbnRpdGllcyA9IGVudDtcblx0fVxuXG5cdGdldFNsaWNlZEVudGl0aWVzKCk6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5zbGljZWRFbnRpdGllcztcblx0fVxuXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55PiA9IFtdLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHRoaXMub3JpZ2luID0gdGhpcy5jb252ZXJ0SXRlbXMoaXRlbXMpO1xuXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldENvbnZlcnRlZE9yaWdpbihpdGVtczogQXJyYXk8SXRlbUVudGl0eT4gPSBbXSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHR0aGlzLm9yaWdpbiA9IEFycmF5LmZyb20oaXRlbXMpO1xuXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGdldE9yaWdpbigpOiBBcnJheTxJdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luO1xuXHR9XG5cblx0ZWRpdE9yaWdpbkl0ZW0oaXRlbUlkOiBzdHJpbmcsIHZhbHVlOiBhbnksIGZpZWxkOiBGaWVsZEVudGl0eSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGNvbnN0IGl0ZW06IEl0ZW1FbnRpdHkgPSB0aGlzLmZpbmRPcmlnaW5JdGVtKGl0ZW1JZCksXG5cdFx0XHRpdGVtQmVmb3JlQ2hhbmdlID0gaXRlbS5jbG9uZSgpO1xuXG5cdFx0aWYgKGl0ZW0pIHtcblx0XHRcdGl0ZW0uc291cmNlSXRlbVtmaWVsZC5nZXRBY2Nlc3NvcigpXSA9IHZhbHVlO1xuXHRcdFx0aXRlbS5idW1wVmVyc2lvbigpO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHRuZXcgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50KHN0cnVjdHVyZUlkLCBpdGVtQmVmb3JlQ2hhbmdlLCBpdGVtLmNsb25lKCkpLFxuXHRcdFx0dGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpXG5cdFx0XTtcblx0fVxuXG5cdGRlbGV0ZUFsbFNlbGVjdGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXHRcdGxldCBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4gPSBbXTtcblxuXHRcdGNvbnN0IGl0ZW1FbnRpdHlJZHMgPSB0aGlzLmZvcm1hdGlvbk1hbmFnZXIuZ2V0U2VsZWN0ZWRJdGVtSWRzKCk7XG5cblx0XHRpdGVtRW50aXR5SWRzLmZvckVhY2goKGl0ZW1FbnRpdHlJZDogSXRlbUVudGl0eUlkKSA9PiB7XG5cdFx0XHRldmVudHMgPSBldmVudHMuY29uY2F0KHRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SXRlbUlkKGl0ZW1FbnRpdHlJZCwgc3RydWN0dXJlSWQpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBldmVudHM7XG5cdH1cblxuXHRkZWxldGVPcmlnaW5JdGVtKHBheWxvYWQ6IG51bWJlciB8IEl0ZW1FbnRpdHlJZCB8IEFycmF5PG51bWJlcj4gfCBBcnJheTxJdGVtRW50aXR5SWQ+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGlmIChwYXlsb2FkIGluc3RhbmNlb2YgSXRlbUVudGl0eUlkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJdGVtSWQocGF5bG9hZCwgc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwYXlsb2FkKSkge1xuXG5cdFx0XHRsZXQgZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+ID0gW107XG5cblx0XHRcdHBheWxvYWQuZm9yRWFjaCgoaXRlbTogbnVtYmVyIHwgSXRlbUVudGl0eUlkKSA9PiB7XG5cdFx0XHRcdGV2ZW50cyA9IGV2ZW50cy5jb25jYXQodGhpcy5kZWxldGVPbmVPcmlnaW5JdGVtKGl0ZW0sIHN0cnVjdHVyZUlkKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGV2ZW50cztcblxuXHRcdH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcihwYXlsb2FkKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SW5kZXgocGF5bG9hZCwgc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHR9XG5cblx0YWRkT3JpZ2luSXRlbShpdGVtOiBhbnksIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFJlYWRvbmx5QXJyYXk8U3RydWN0dXJlQWdncmVnYXRlRXZlbnQ+IHtcblx0XHR0aGlzLm9yaWdpbi5wdXNoKGl0ZW0pO1xuXHRcdHJldHVybiBbdGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpXTtcblx0fVxuXG5cdHNldEN1c3RvbUNvbmZpZyhjb25maWc6IEZvcm1hdGlvbkN1c3RvbVNlbGVjdGlvbkNvbmZpZyk6IEFycmF5PFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50PiB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uTWFuYWdlci5zZXRDdXN0b21Db25maWcoY29uZmlnKTtcblx0fVxuXG5cdHNlbGVjdEN1c3RvbShpZDogRm9ybWF0aW9uQ3VzdG9tU2VsZWN0SWQpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIuc2VsZWN0Q3VzdG9tKGlkLCB0aGlzLmdldEVudGl0aWVzKCkpO1xuXHR9XG5cblx0c2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlci5zZWxlY3RBbGwodGhpcy5nZXRFbnRpdGllcygpLm1hcChlbnRpdHkgPT4gZW50aXR5LmdldElkKCkpKTtcblx0fVxuXG5cdHVuc2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlci51bnNlbGVjdEFsbCgpO1xuXHR9XG5cblx0c2VsZWN0QnlJbmRleChpbmRleGVzOiBBcnJheTxudW1iZXI+KTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyLnNlbGVjdEJ5SW5kZXgoaW5kZXhlcywgdGhpcy5nZXRFbnRpdGllcygpLm1hcChlID0+IGUuZ2V0SWQoKSkpO1xuXHR9XG5cblx0c2VsZWN0QnlJZHMoaWRzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyLnNlbGVjdEJ5SWRzKGlkcywgdGhpcy5nZXRFbnRpdGllcygpKTtcblx0fVxuXG5cdHJlU2VsZWN0KCk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlci5yZVNlbGVjdEJ5SWRzKHRoaXMuZ2V0RW50aXRpZXMoKSk7XG5cdH1cblxuXHRzZXRTZWxlY3RlZFJvd3Moc2VsZWN0ZWRSb3dzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyLnNlbGVjdFJvd3Moc2VsZWN0ZWRSb3dzLCB0aGlzLmdldEVudGl0aWVzKCkubWFwKGUgPT4gZS5nZXRJZCgpKSk7XG5cdH1cblxuXHR0b2dnbGVSb3coaXRlbUlkOiBzdHJpbmcsIHR5cGU6IFJvd1NlbGVjdFRvZ2dsZVR5cGUpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIudG9nZ2xlUm93KGl0ZW1JZCwgdHlwZSwgdGhpcy5nZXRFbnRpdGllcygpLm1hcChlID0+IGUuZ2V0SWQoKSkpO1xuXHR9XG5cblx0Z2V0Rm9ybWF0aW9uKCk6IEZvcm1hdGlvbk1hbmFnZXIge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvbk1hbmFnZXI7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRJdGVtcyhpdGVtczogQXJyYXk8YW55Pik6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gaXRlbXMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdHJldHVybiBuZXcgSXRlbUVudGl0eShuZXcgSXRlbUVudGl0eUlkKFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpKSwgaXRlbSwgaW5kZXgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudChzdHJ1Y3R1cmVJZCwgdGhpcy5vcmlnaW4pO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kT3JpZ2luSXRlbShpdGVtSWQ6IHN0cmluZyk6IEl0ZW1FbnRpdHkge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbi5maW5kKChpdGVtOiBJdGVtRW50aXR5KSA9PiBpdGVtLmdldElkKCkudG9TdHJpbmcoKSA9PT0gaXRlbUlkKTtcblx0fVxuXG5cdHByaXZhdGUgZmluZE9yaWdpbkl0ZW1JbmRleChpdGVtSWQ6IHN0cmluZyk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luLmZpbmRJbmRleCgoaXRlbTogSXRlbUVudGl0eSkgPT4gaXRlbS5nZXRJZCgpLnRvU3RyaW5nKCkgPT09IGl0ZW1JZCk7XG5cdH1cblxuXHRwcml2YXRlIHJlY2FsY3VsYXRlUG9zaXRpb25zKCk6IHZvaWQge1xuXHRcdHRoaXMuZW50aXRpZXMuZm9yRWFjaCgoZW50OiBJdGVtRW50aXR5LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRlbnQuc2V0UG9zaXRpb24oaW5kZXgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBkZWxldGVPbmVPcmlnaW5JdGVtKGl0ZW06IG51bWJlciB8IEl0ZW1FbnRpdHlJZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRpZiAoaXRlbSBpbnN0YW5jZW9mIEl0ZW1FbnRpdHlJZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SXRlbUlkKGl0ZW0sIHN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIoaXRlbSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUluZGV4KGl0ZW0sIHN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZGVsZXRlT3JpZ2luSXRlbUJ5SXRlbUlkKGl0ZW1JZDogSXRlbUVudGl0eUlkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5maW5kT3JpZ2luSXRlbUluZGV4KGl0ZW1JZC50b1N0cmluZygpKTtcblxuXHRcdHJldHVybiB0aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUluZGV4KGluZGV4LCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcml2YXRlIGRlbGV0ZU9yaWdpbkl0ZW1CeUluZGV4KGluZGV4OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHRcdGNvbnN0IHJlbW92ZWRJdGVtczogQXJyYXk8SXRlbUVudGl0eT4gPSB0aGlzLm9yaWdpbi5zcGxpY2UoaW5kZXgsIDEpO1xuXG5cdFx0XHRpZiAocmVtb3ZlZEl0ZW1zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHJlbW92ZWRJdGVtcykge1xuXHRcdFx0XHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlci51bnNlbGVjdFJvdyhlbGVtZW50LmdldElkKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlci5jYWxjdWxhdGVBbGxTZWxlY3RlZChyZW1vdmVkSXRlbXMubWFwKChmKSA9PiBmLmdldElkKCkpKTtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyLmNhbGN1bGF0ZUFsbFVuc2VsZWN0ZWQoKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0dGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpXG5cdFx0XHRdO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHByaXZhdGUgZGVsZXRlTWFueU9yaWdpbkl0ZW1CeUluZGV4KGluZGV4ZXM6IEFycmF5PG51bWJlcj4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0bGV0IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiA9IFtdO1xuXG5cdFx0aW5kZXhlcy5mb3JFYWNoKChpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRldmVudHMgPSBldmVudHMuY29uY2F0KHRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SW5kZXgoaW5kZXgsIHN0cnVjdHVyZUlkKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZXZlbnRzO1xuXHR9XG5cblx0cHJpdmF0ZSBkZWxldGVNYW55T3JpZ2luSXRlbUJ5SXRlbUlEKGl0ZW1JZHM6IEFycmF5PEl0ZW1FbnRpdHlJZD4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0bGV0IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiA9IFtdO1xuXG5cdFx0aXRlbUlkcy5mb3JFYWNoKChpdGVtSWQ6IEl0ZW1FbnRpdHlJZCkgPT4ge1xuXHRcdFx0ZXZlbnRzID0gZXZlbnRzLmNvbmNhdCh0aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUl0ZW1JZChpdGVtSWQsIHN0cnVjdHVyZUlkKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZXZlbnRzO1xuXHR9XG5cbn1cbiJdfQ==