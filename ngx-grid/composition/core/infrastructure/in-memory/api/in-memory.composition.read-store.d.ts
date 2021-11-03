import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { CompositionReadModeRoot } from '../../../domain-read/composition.read-mode-root';
import { CompositionAggregate } from '../../../domain/composition.aggregate';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionReadModelRootConverter } from '../../../domain-read/composition.read-model-root-converter';
import { CompositionId } from '../../../api/composition.id';
import { CompositionReadModelRootId } from '../../../api/composition.read-model-root-id';
import * as i0 from "@angular/core";
export declare class InMemoryCompositionReadStore extends InMemoryReadModelStore<CompositionReadModelRootId, CompositionReadModeRoot, CompositionId, CompositionAggregate> {
    private inMemoryCompositionStore;
    private compositionConverter;
    constructor(inMemoryCompositionStore: InMemoryCompositionStore, compositionConverter: CompositionReadModelRootConverter);
    toReadModel(aggregate: CompositionAggregate): CompositionReadModeRoot;
    static ɵfac: i0.ɵɵFactoryDeclaration<InMemoryCompositionReadStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InMemoryCompositionReadStore>;
}
//# sourceMappingURL=in-memory.composition.read-store.d.ts.map