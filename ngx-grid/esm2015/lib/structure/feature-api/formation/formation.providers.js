/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesModule } from '@generic-ui/hermes';
import { FormationDispatcher } from '../../domain/formation/formation.dispatcher';
import { SetFormationCommandHandler } from '../../domain/formation/set/set-formation.command-handler';
import { ToggleSelectedRowCommandHandler } from '../../domain/formation/toggle/toggle-selected-row.command-handler';
import { FormationRepository } from './read/formation-repository';
import { FormationAggregateFactory } from '../../domain/formation/formation.aggregate-factory';
import { FormationConverter } from './read/formation.converter';
import { FormationEventService } from './formation-event.service';
import { StructureFormationDispatcher } from './structure-formation.dispatcher';
import { StructureFormationWarehouse } from './structure-formation.warehouse';
/** @type {?} */
const commandProviders = [
    FormationDispatcher,
    FormationAggregateFactory
];
/** @type {?} */
const readProviders = [
    FormationRepository
];
/** @type {?} */
export const formationCommandHandlers = [
    ...HermesModule.registerCommandHandler(SetFormationCommandHandler, 'StructureAggregate'),
    ...HermesModule.registerCommandHandler(ToggleSelectedRowCommandHandler, 'StructureAggregate')
];
/** @type {?} */
export const formationProviders = [
    ...commandProviders,
    ...readProviders,
    FormationEventService,
    FormationConverter,
    StructureFormationDispatcher,
    StructureFormationWarehouse
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLnByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztNQUV4RSxnQkFBZ0IsR0FBRztJQUN4QixtQkFBbUI7SUFDbkIseUJBQXlCO0NBQ3pCOztNQUVLLGFBQWEsR0FBRztJQUNyQixtQkFBbUI7Q0FDbkI7O0FBRUQsTUFBTSxPQUFPLHdCQUF3QixHQUFHO0lBQ3ZDLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixFQUFFLG9CQUFvQixDQUFDO0lBQ3hGLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLCtCQUErQixFQUFFLG9CQUFvQixDQUFDO0NBQzdGOztBQUVELE1BQU0sT0FBTyxrQkFBa0IsR0FBRztJQUNqQyxHQUFHLGdCQUFnQjtJQUNuQixHQUFHLGFBQWE7SUFFaEIscUJBQXFCO0lBRXJCLGtCQUFrQjtJQUVsQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0NBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRm9ybWF0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vZm9ybWF0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2V0Rm9ybWF0aW9uQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3NldC9zZXQtZm9ybWF0aW9uLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBUb2dnbGVTZWxlY3RlZFJvd0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi90b2dnbGUvdG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9mb3JtYXRpb24tcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25BZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9mb3JtYXRpb24uYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi9yZWFkL2Zvcm1hdGlvbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi9mb3JtYXRpb24tZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb3JtYXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtZm9ybWF0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5cbmNvbnN0IGNvbW1hbmRQcm92aWRlcnMgPSBbXG5cdEZvcm1hdGlvbkRpc3BhdGNoZXIsXG5cdEZvcm1hdGlvbkFnZ3JlZ2F0ZUZhY3Rvcnlcbl07XG5cbmNvbnN0IHJlYWRQcm92aWRlcnMgPSBbXG5cdEZvcm1hdGlvblJlcG9zaXRvcnlcbl07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRpb25Db21tYW5kSGFuZGxlcnMgPSBbXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldEZvcm1hdGlvbkNvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKVxuXTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdGlvblByb3ZpZGVycyA9IFtcblx0Li4uY29tbWFuZFByb3ZpZGVycyxcblx0Li4ucmVhZFByb3ZpZGVycyxcblxuXHRGb3JtYXRpb25FdmVudFNlcnZpY2UsXG5cblx0Rm9ybWF0aW9uQ29udmVydGVyLFxuXG5cdFN0cnVjdHVyZUZvcm1hdGlvbkRpc3BhdGNoZXIsXG5cdFN0cnVjdHVyZUZvcm1hdGlvbldhcmVob3VzZVxuXTtcbiJdfQ==