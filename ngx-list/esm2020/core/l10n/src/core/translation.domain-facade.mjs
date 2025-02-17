import { TranslationFacade } from '../api/translation.facade';
import { enTranslation } from './lang/en';
import { Dictionary } from './dictionary';
import { HermesReplaySubject } from '@generic-ui/hermes';
export class TranslationDomainFacade extends TranslationFacade {
    constructor() {
        super();
        this.defaultTranslation = enTranslation;
        this.dictionary = new Dictionary();
        this.dictionary$ = new HermesReplaySubject(1);
    }
    getTranslation() {
        return this.dictionary.getTranslation();
    }
    onTranslation() {
        return this.dictionary$.toObservable();
    }
    setDefaultTranslation() {
        this.changeTranslationAndPropagate(this.defaultTranslation);
    }
    changeTranslation(change) {
        this.changeTranslationAndPropagate(change);
    }
    setResolver(resolver) {
        this.setResolverAndPropagate(resolver);
    }
    changeTranslationAndPropagate(change) {
        this.dictionary.changeTranslation(change);
        this.dictionary$.next(this.dictionary.getTranslation());
    }
    setResolverAndPropagate(resolver) {
        this.dictionary.setResolver(resolver);
        this.dictionary$.next(this.dictionary.getTranslation());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uZG9tYWluLWZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9sMTBuL3NyYy9jb3JlL3RyYW5zbGF0aW9uLmRvbWFpbi1mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBb0IsbUJBQW1CLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFHMUYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGlCQUFpQjtJQVE3RDtRQUNDLEtBQUssRUFBRSxDQUFDO1FBUFEsdUJBQWtCLEdBQWdCLGFBQWEsQ0FBQztRQUVoRCxlQUFVLEdBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUUxQyxnQkFBVyxHQUErQixJQUFJLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBSXRGLENBQUM7SUFFRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxxQkFBcUI7UUFDcEIsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxNQUF5QjtRQUMxQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUFnRDtRQUMzRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVPLDZCQUE2QixDQUFDLE1BQXVDO1FBRTVFLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTyx1QkFBdUIsQ0FBQyxRQUFnRDtRQUUvRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRpb25GYWNhZGUgfSBmcm9tICcuLi9hcGkvdHJhbnNsYXRpb24uZmFjYWRlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vYXBpL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uQ2hhbmdlIH0gZnJvbSAnLi4vYXBpL3RyYW5zbGF0aW9uLWNoYW5nZSc7XG5pbXBvcnQgeyBlblRyYW5zbGF0aW9uIH0gZnJvbSAnLi9sYW5nL2VuJztcbmltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tICcuL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzUmVwbGF5U3ViamVjdCwgSGVybWVzU3ViamVjdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uRG9tYWluRmFjYWRlIGV4dGVuZHMgVHJhbnNsYXRpb25GYWNhZGUge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGVmYXVsdFRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvbiA9IGVuVHJhbnNsYXRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBkaWN0aW9uYXJ5OiBEaWN0aW9uYXJ5ID0gbmV3IERpY3Rpb25hcnkoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRpY3Rpb25hcnkkOiBIZXJtZXNTdWJqZWN0PFRyYW5zbGF0aW9uPiA9IG5ldyBIZXJtZXNSZXBsYXlTdWJqZWN0KDEpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRUcmFuc2xhdGlvbigpOiBUcmFuc2xhdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMuZGljdGlvbmFyeS5nZXRUcmFuc2xhdGlvbigpO1xuXHR9XG5cblx0b25UcmFuc2xhdGlvbigpOiBIZXJtZXNPYnNlcnZhYmxlPFRyYW5zbGF0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuZGljdGlvbmFyeSQudG9PYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRzZXREZWZhdWx0VHJhbnNsYXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5jaGFuZ2VUcmFuc2xhdGlvbkFuZFByb3BhZ2F0ZSh0aGlzLmRlZmF1bHRUcmFuc2xhdGlvbik7XG5cdH1cblxuXHRjaGFuZ2VUcmFuc2xhdGlvbihjaGFuZ2U6IFRyYW5zbGF0aW9uQ2hhbmdlKTogdm9pZCB7XG5cdFx0dGhpcy5jaGFuZ2VUcmFuc2xhdGlvbkFuZFByb3BhZ2F0ZShjaGFuZ2UpO1xuXHR9XG5cblx0c2V0UmVzb2x2ZXIocmVzb2x2ZXI6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zZXRSZXNvbHZlckFuZFByb3BhZ2F0ZShyZXNvbHZlcik7XG5cdH1cblxuXHRwcml2YXRlIGNoYW5nZVRyYW5zbGF0aW9uQW5kUHJvcGFnYXRlKGNoYW5nZTogVHJhbnNsYXRpb25DaGFuZ2UgfCBUcmFuc2xhdGlvbik6IHZvaWQge1xuXG5cdFx0dGhpcy5kaWN0aW9uYXJ5LmNoYW5nZVRyYW5zbGF0aW9uKGNoYW5nZSk7XG5cblx0XHR0aGlzLmRpY3Rpb25hcnkkLm5leHQodGhpcy5kaWN0aW9uYXJ5LmdldFRyYW5zbGF0aW9uKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRSZXNvbHZlckFuZFByb3BhZ2F0ZShyZXNvbHZlcjogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdHRoaXMuZGljdGlvbmFyeS5zZXRSZXNvbHZlcihyZXNvbHZlcik7XG5cblx0XHR0aGlzLmRpY3Rpb25hcnkkLm5leHQodGhpcy5kaWN0aW9uYXJ5LmdldFRyYW5zbGF0aW9uKCkpO1xuXHR9XG59XG4iXX0=