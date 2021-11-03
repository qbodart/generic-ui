import { ReadModelRoot } from '../read-model-root';
import { Optional } from '../../../../common/optional';
import { ReadModelRootId } from '../read-model-root-id';
import { AggregateId } from '../../../domain/tactical/aggregate/aggregate-id';
export declare abstract class ReadModelStore<I extends ReadModelRootId, R extends ReadModelRoot<I>> {
    abstract getById(readModelRootId: AggregateId): Optional<R>;
}
//# sourceMappingURL=read-model.store.d.ts.map