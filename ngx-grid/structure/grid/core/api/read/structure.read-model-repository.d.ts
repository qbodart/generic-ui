import { Observable } from 'rxjs';
import { AggregateId, DomainEvent, DomainEventBus } from '@generic-ui/hermes';
import { Reactive } from '../../../../../common/cdk/reactive/reactive';
import { StructureReadModelRoot } from './structure.read-model-root';
import { StructureId } from '../../../../core/domain/structure.id';
export declare abstract class StructureReadModelRepository extends Reactive {
    protected constructor(domainEventBus: DomainEventBus);
    abstract getStructure(aggregateId: AggregateId): StructureReadModelRoot;
    abstract onStructure(aggregateId: AggregateId): Observable<StructureReadModelRoot>;
    protected abstract forEvents(): Array<typeof DomainEvent>;
    protected abstract subs(event: DomainEvent<StructureId>): void;
}
