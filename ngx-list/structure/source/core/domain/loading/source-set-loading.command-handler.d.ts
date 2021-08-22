import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SourceSetLoadingCommand } from './source-set-loading.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class SourceSetLoadingCommandHandler implements CommandHandler<StructureAggregate, SourceSetLoadingCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SourceSetLoadingCommand>;
    publish(aggregate: StructureAggregate, command: SourceSetLoadingCommand): void;
    handle(aggregate: StructureAggregate, command: SourceSetLoadingCommand): void;
}
