import { DataField } from '../data-field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../../summaries/core/domain/summaries.type';
export class StringDataField extends DataField {
    constructor(accessor, matchers, summariesConfig) {
        super(accessor, DataType.STRING, matchers, summariesConfig);
    }
    assignDefaultSummaries() {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT;
    }
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT;
    }
    search(item, searchPhrase) {
        const value = this.getSearchValue(item);
        if (typeof value === 'string') {
            return value.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1;
        }
        else {
            return false;
        }
    }
    sort(strOne, strTwo) {
        const sureStrOne = '' + strOne, sureStrTwo = '' + strTwo;
        return sureStrOne.localeCompare(sureStrTwo);
    }
    filter(value, filterPhrase) {
        return value.toLowerCase().indexOf(filterPhrase.toLowerCase()) > -1;
    }
    equals(item, value) {
        return this.getValue(item) === value;
    }
    getDisplayValue(item) {
        return item;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWRhdGEtZmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9kYXRhL3R5cGUvc3RyaW5nLWRhdGEtZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR3hDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUt2RixNQUFNLE9BQU8sZUFBZ0IsU0FBUSxTQUFpQjtJQUVyRCxZQUFZLFFBQWEsRUFDdEIsUUFBdUIsRUFDdkIsZUFBdUM7UUFDekMsS0FBSyxDQUNKLFFBQVEsRUFDUixRQUFRLENBQUMsTUFBTSxFQUNmLFFBQVEsRUFDUixlQUFlLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsc0JBQXNCO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDO1FBQ1QsK0JBQStCO1FBQy9CLDJCQUEyQjtJQUM1QixDQUFDO0lBRUQsdUJBQXVCO1FBQ3RCLE9BQU8sYUFBYSxDQUFDLEtBQUs7WUFDekIsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQXNCLEVBQUUsWUFBb0I7UUFDbEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDcEU7YUFBTTtZQUNOLE9BQU8sS0FBSyxDQUFDO1NBQ2I7SUFDRixDQUFDO0lBRUQsSUFBSSxDQUFDLE1BQWMsRUFBRSxNQUFjO1FBQ2xDLE1BQU0sVUFBVSxHQUFHLEVBQUUsR0FBRyxNQUFNLEVBQzdCLFVBQVUsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBRTFCLE9BQU8sVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWEsRUFBRSxZQUFvQjtRQUN6QyxPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFzQixFQUFFLEtBQWE7UUFDM0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRUQsZUFBZSxDQUFDLElBQVk7UUFDM0IsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhRmllbGQgfSBmcm9tICcuLi9kYXRhLWZpZWxkJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vZGF0YS10eXBlJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi8uLi8uLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBDb2x1bW5TdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb2x1bW4vY29sdW1uLXN1bW1hcmllcy5jb25maWcnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgU3RyaW5nRGF0YUZpZWxkIGV4dGVuZHMgRGF0YUZpZWxkPHN0cmluZz4ge1xuXG5cdGNvbnN0cnVjdG9yKGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRzdW1tYXJpZXNDb25maWc/OiBDb2x1bW5TdW1tYXJpZXNDb25maWcpIHtcblx0XHRzdXBlcihcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0RGF0YVR5cGUuU1RSSU5HLFxuXHRcdFx0bWF0Y2hlcnMsXG5cdFx0XHRzdW1tYXJpZXNDb25maWcpO1xuXHR9XG5cblx0YXNzaWduRGVmYXVsdFN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlIHtcblx0XHRyZXR1cm4gMDtcblx0XHQvLyByZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVCB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLkRJU1RJTkNUO1xuXHR9XG5cblx0YXNzaWduUG9zc2libGVTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZSB7XG5cdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuQ09VTlQgfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5ESVNUSU5DVDtcblx0fVxuXG5cdHNlYXJjaChpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRTZWFyY2hWYWx1ZShpdGVtKTtcblxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFBocmFzZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0c29ydChzdHJPbmU6IHN0cmluZywgc3RyVHdvOiBzdHJpbmcpOiBudW1iZXIge1xuXHRcdGNvbnN0IHN1cmVTdHJPbmUgPSAnJyArIHN0ck9uZSxcblx0XHRcdHN1cmVTdHJUd28gPSAnJyArIHN0clR3bztcblxuXHRcdHJldHVybiBzdXJlU3RyT25lLmxvY2FsZUNvbXBhcmUoc3VyZVN0clR3byk7XG5cdH1cblxuXHRmaWx0ZXIodmFsdWU6IHN0cmluZywgZmlsdGVyUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclBocmFzZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuXHR9XG5cblx0ZXF1YWxzKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRWYWx1ZShpdGVtKSA9PT0gdmFsdWU7XG5cdH1cblxuXHRnZXREaXNwbGF5VmFsdWUoaXRlbTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gaXRlbTtcblx0fVxuXG59XG4iXX0=