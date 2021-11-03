import { GenericBuilder } from '../../../common/cdk/generic-builder';
import { PagingDefinition } from '../../paging/feature/paging-definition';
export class StructureDefinitionBuilder extends GenericBuilder {
    constructor(headerEnabled, bottomPaging, topPaging) {
        super();
        this.headerEnabled = headerEnabled;
        this.bottomPaging = bottomPaging;
        this.topPaging = topPaging;
        this.border = true;
    }
    buildObject() {
        return new StructureDefinition(this.headerEnabled, this.bottomPaging, this.topPaging, this.border);
    }
    withHeader(enabled) {
        this.headerEnabled = enabled;
        return this;
    }
    withBottomPaging(paging) {
        this.bottomPaging = paging;
        return this;
    }
    withTopPaging(paging) {
        this.topPaging = paging;
        return this;
    }
    withBorder(enabled) {
        this.border = enabled;
        return this;
    }
}
export class StructureDefinitionDefaultBuilder extends StructureDefinitionBuilder {
    constructor() {
        super(StructureDefinitionDefaultBuilder.defaultHeaderEnabled, StructureDefinitionDefaultBuilder.defaultBottomPaging, StructureDefinitionDefaultBuilder.defaultTopPaging);
    }
}
StructureDefinitionDefaultBuilder.defaultHeaderEnabled = true;
StructureDefinitionDefaultBuilder.defaultBottomPaging = new PagingDefinition.DefaultBuilder().build();
StructureDefinitionDefaultBuilder.defaultTopPaging = new PagingDefinition.DefaultBuilder().build();
export class StructureDefinition {
    constructor(headerEnabled, bottomPaging, topPaging, border) {
        this.headerEnabled = headerEnabled;
        this.bottomPaging = bottomPaging;
        this.topPaging = topPaging;
        this.border = border;
    }
    isHeaderEnabled() {
        return this.headerEnabled;
    }
    isBorderEnabled() {
        return this.border;
    }
    getBottomPaging() {
        return this.bottomPaging;
    }
    getTopPaging() {
        return this.topPaging;
    }
}
StructureDefinition.Builder = StructureDefinitionBuilder;
StructureDefinition.DefaultBuilder = StructureDefinitionDefaultBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvc3RydWN0dXJlLWRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTFFLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxjQUFtQztJQUlsRixZQUFvQixhQUFzQixFQUMvQixZQUE4QixFQUM5QixTQUEyQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQUhXLGtCQUFhLEdBQWIsYUFBYSxDQUFTO1FBQy9CLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUo5QixXQUFNLEdBQVksSUFBSSxDQUFDO0lBTS9CLENBQUM7SUFFUyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxtQkFBbUIsQ0FDN0IsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsTUFBTSxDQUNYLENBQUM7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLE9BQWdCO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQXdCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUF3QjtRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0NBRUQ7QUFFRCxNQUFNLE9BQU8saUNBQWtDLFNBQVEsMEJBQTBCO0lBTWhGO1FBQ0MsS0FBSyxDQUNKLGlDQUFpQyxDQUFDLG9CQUFvQixFQUN0RCxpQ0FBaUMsQ0FBQyxtQkFBbUIsRUFDckQsaUNBQWlDLENBQUMsZ0JBQWdCLENBQ2xELENBQUM7SUFDSCxDQUFDOztBQVZ1QixzREFBb0IsR0FBWSxJQUFJLENBQUM7QUFDckMscURBQW1CLEdBQXFCLElBQUksZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDdEYsa0RBQWdCLEdBQXFCLElBQUksZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7QUFXNUcsTUFBTSxPQUFPLG1CQUFtQjtJQWMvQixZQUFZLGFBQXNCLEVBQy9CLFlBQThCLEVBQzlCLFNBQTJCLEVBQzNCLE1BQWU7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7QUFwQ00sMkJBQU8sR0FBRywwQkFBMEIsQ0FBQztBQUVyQyxrQ0FBYyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VuZXJpY0J1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2dlbmVyaWMtYnVpbGRlcic7XG5pbXBvcnQgeyBQYWdpbmdEZWZpbml0aW9uIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLWRlZmluaXRpb24nO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIgZXh0ZW5kcyBHZW5lcmljQnVpbGRlcjxTdHJ1Y3R1cmVEZWZpbml0aW9uPiB7XG5cblx0cHJpdmF0ZSBib3JkZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaGVhZGVyRW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSBib3R0b21QYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24sXG5cdFx0XHRcdHByaXZhdGUgdG9wUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBidWlsZE9iamVjdCgpOiBTdHJ1Y3R1cmVEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZURlZmluaXRpb24oXG5cdFx0XHR0aGlzLmhlYWRlckVuYWJsZWQsXG5cdFx0XHR0aGlzLmJvdHRvbVBhZ2luZyxcblx0XHRcdHRoaXMudG9wUGFnaW5nLFxuXHRcdFx0dGhpcy5ib3JkZXJcblx0XHQpO1xuXHR9XG5cblx0d2l0aEhlYWRlcihlbmFibGVkOiBib29sZWFuKTogU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXHRcdHRoaXMuaGVhZGVyRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR3aXRoQm90dG9tUGFnaW5nKHBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbik6IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLmJvdHRvbVBhZ2luZyA9IHBhZ2luZztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHdpdGhUb3BQYWdpbmcocGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uKTogU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXHRcdHRoaXMudG9wUGFnaW5nID0gcGFnaW5nO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0d2l0aEJvcmRlcihlbmFibGVkOiBib29sZWFuKTogU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXHRcdHRoaXMuYm9yZGVyID0gZW5hYmxlZDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIgZXh0ZW5kcyBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdEhlYWRlckVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0Qm90dG9tUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uID0gbmV3IFBhZ2luZ0RlZmluaXRpb24uRGVmYXVsdEJ1aWxkZXIoKS5idWlsZCgpO1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0VG9wUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uID0gbmV3IFBhZ2luZ0RlZmluaXRpb24uRGVmYXVsdEJ1aWxkZXIoKS5idWlsZCgpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0U3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyLmRlZmF1bHRIZWFkZXJFbmFibGVkLFxuXHRcdFx0U3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyLmRlZmF1bHRCb3R0b21QYWdpbmcsXG5cdFx0XHRTdHJ1Y3R1cmVEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIuZGVmYXVsdFRvcFBhZ2luZ1xuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb24ge1xuXG5cdHN0YXRpYyBCdWlsZGVyID0gU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXI7XG5cblx0c3RhdGljIERlZmF1bHRCdWlsZGVyID0gU3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaGVhZGVyRW5hYmxlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGJvdHRvbVBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRvcFBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGJvcmRlcjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihoZWFkZXJFbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRib3R0b21QYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24sXG5cdFx0XHRcdHRvcFBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbixcblx0XHRcdFx0Ym9yZGVyOiBib29sZWFuKSB7XG5cdFx0dGhpcy5oZWFkZXJFbmFibGVkID0gaGVhZGVyRW5hYmxlZDtcblx0XHR0aGlzLmJvdHRvbVBhZ2luZyA9IGJvdHRvbVBhZ2luZztcblx0XHR0aGlzLnRvcFBhZ2luZyA9IHRvcFBhZ2luZztcblx0XHR0aGlzLmJvcmRlciA9IGJvcmRlcjtcblx0fVxuXG5cdGlzSGVhZGVyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXJFbmFibGVkO1xuXHR9XG5cblx0aXNCb3JkZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmJvcmRlcjtcblx0fVxuXG5cdGdldEJvdHRvbVBhZ2luZygpOiBQYWdpbmdEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5ib3R0b21QYWdpbmc7XG5cdH1cblxuXHRnZXRUb3BQYWdpbmcoKTogUGFnaW5nRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMudG9wUGFnaW5nO1xuXHR9XG5cbn1cbiJdfQ==