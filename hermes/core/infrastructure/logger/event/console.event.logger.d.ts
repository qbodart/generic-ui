import { OnDestroy } from '@angular/core';
import { DomainEventLogger } from '../../../domain/event/domain-event.logger';
import { DomainEventBus } from '../../../domain/event/domain-event.bus';
import { DomainEvent } from '../../../domain/event/domain-event';
import { AggregateStoreRegister } from '../../../domain/command/store/aggregate-store.register';
import { AggregateId } from '../../../domain/tactical/aggregate/aggregate-id';
import * as i0 from "@angular/core";
export declare class ConsoleEventLogger extends DomainEventLogger implements OnDestroy {
    private readonly aggregateStoreRegister;
    private enabled;
    private unsubscribe$;
    constructor(eventBus: DomainEventBus, aggregateStoreRegister: AggregateStoreRegister);
    ngOnDestroy(): void;
    start(): void;
    stop(): void;
    protected print(domainEvent: DomainEvent<AggregateId>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConsoleEventLogger, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConsoleEventLogger>;
}
//# sourceMappingURL=console.event.logger.d.ts.map