import { Observable } from 'rxjs';
import { DomainEvent, DomainEventBus } from '@generic-ui/hermes';
import { CompositionId } from '../../domain/composition/composition-id';
export declare class CompositionEventService {
    private readonly domainEventBus;
    constructor(domainEventBus: DomainEventBus);
    onColumnsChanged(compositionId: CompositionId): Observable<DomainEvent>;
    onWidthChanged(compositionId: CompositionId): Observable<number>;
    onContainerWidthChanged(compositionId: CompositionId): Observable<number>;
}
