import { ListViewDomainEvent } from '../../list-view.domain-event';
export class ListViewSelectorToggledEvent extends ListViewDomainEvent {
    constructor(schemaId, enabled) {
        super(schemaId, enabled, 'ListViewSelectorToggledEvent');
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvbGlzdC12aWV3L3NyYy9jb3JlL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHbkUsTUFBTSxPQUFPLDRCQUE2QixTQUFRLG1CQUFtQjtJQUVwRSxZQUFZLFFBQW9CLEVBQ1osT0FBZ0I7UUFDbkMsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUR0QyxZQUFPLEdBQVAsT0FBTyxDQUFTO0lBRXBDLENBQUM7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi8uLi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdEb21haW5FdmVudCB9IGZyb20gJy4uLy4uL2xpc3Qtdmlldy5kb21haW4tZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50IGV4dGVuZHMgTGlzdFZpZXdEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IExpc3RWaWV3SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCBlbmFibGVkLCAnTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudCcpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cbn1cbiJdfQ==