import { StructureId } from '../../../../../core/domain/structure.id';
import { StructureDomainEvent } from '../../../../../core/domain/structure.domain-event';
export declare class AllUniqueFilterUnselectedEvent extends StructureDomainEvent {
    constructor(aggregateId: StructureId);
}
