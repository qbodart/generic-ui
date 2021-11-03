import { CellView } from './cell-view';
import { DataType } from '../../../../structure/field/core/domain/field/data/data-type';
export class ViewEntity {
    constructor(cellView) {
        this.templateFunction = (cellValue, item) => cellValue;
        if (typeof cellView === 'function') {
            this.view = CellView.FUNCTION;
            this.templateFunction = cellView;
        }
        else {
            this.view = cellView;
        }
    }
    static fromDataType(dataType) {
        if (dataType === DataType.DATE) {
            return new ViewEntity(CellView.DATE);
        }
        else {
            return new ViewEntity(CellView.TEXT);
        }
    }
    getCellView() {
        return this.view;
    }
    getTemplateFunction() {
        return this.templateFunction;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi92aWV3LmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUV4RixNQUFNLE9BQU8sVUFBVTtJQU10QixZQUFZLFFBQXdCO1FBRm5CLHFCQUFnQixHQUF3QyxDQUFDLFNBQWMsRUFBRSxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUlqSCxJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztTQUNqQzthQUFNO1lBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7U0FDckI7SUFDRixDQUFDO0lBRU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFrQjtRQUU1QyxJQUFJLFFBQVEsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDTixPQUFPLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQztJQUVGLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3RW50aXR5IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZpZXc6IENlbGxWaWV3O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVGdW5jdGlvbj86IChlbnRpdHk6IGFueSwgaXRlbTogYW55KSA9PiBzdHJpbmcgPSAoY2VsbFZhbHVlOiBhbnksIGl0ZW06IGFueSkgPT4gY2VsbFZhbHVlO1xuXG5cdGNvbnN0cnVjdG9yKGNlbGxWaWV3OiBDZWxsVmlldyB8IGFueSkge1xuXG5cdFx0aWYgKHR5cGVvZiBjZWxsVmlldyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy52aWV3ID0gQ2VsbFZpZXcuRlVOQ1RJT047XG5cdFx0XHR0aGlzLnRlbXBsYXRlRnVuY3Rpb24gPSBjZWxsVmlldztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy52aWV3ID0gY2VsbFZpZXc7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBmcm9tRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVmlld0VudGl0eSB7XG5cblx0XHRpZiAoZGF0YVR5cGUgPT09IERhdGFUeXBlLkRBVEUpIHtcblx0XHRcdHJldHVybiBuZXcgVmlld0VudGl0eShDZWxsVmlldy5EQVRFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5ldyBWaWV3RW50aXR5KENlbGxWaWV3LlRFWFQpO1xuXHRcdH1cblxuXHR9XG5cblx0Z2V0Q2VsbFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiB0aGlzLnZpZXc7XG5cdH1cblxuXHRnZXRUZW1wbGF0ZUZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGVGdW5jdGlvbjtcblx0fVxuXG59XG4iXX0=