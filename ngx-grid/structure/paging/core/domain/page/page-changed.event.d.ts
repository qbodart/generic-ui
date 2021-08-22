import { StructureId } from '../../../../core/domain/structure.id';
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export declare class PageChangedEvent extends StructureDomainEvent {
    constructor(aggregateId: StructureId);
}
