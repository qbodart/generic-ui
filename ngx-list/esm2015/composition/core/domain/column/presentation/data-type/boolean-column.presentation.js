import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
export class BooleanColumnPresentation extends ColumnPresentation {
    constructor() {
        super();
    }
    static getInstance() {
        if (!BooleanColumnPresentation.instance) {
            BooleanColumnPresentation.instance = new BooleanColumnPresentation();
        }
        return BooleanColumnPresentation.instance;
    }
    getPossibleViews() {
        return [
            CellView.TEXT,
            CellView.ITALIC,
            CellView.CHIP,
            CellView.BOLD,
            CellView.CHECKBOX
        ];
    }
    getDefaultView() {
        return CellView.TEXT;
    }
    getDefaultAlign(view) {
        if (view.getCellView() === CellView.CHECKBOX) {
            return ColumnAlign.CENTER;
        }
        else {
            return ColumnAlign.LEFT;
        }
    }
}
BooleanColumnPresentation.instance = null;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vcHJlc2VudGF0aW9uL2RhdGEtdHlwZS9ib29sZWFuLWNvbHVtbi5wcmVzZW50YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUkzQyxNQUFNLE9BQU8seUJBQTBCLFNBQVEsa0JBQWtCO0lBSWhFO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQVc7UUFDakIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtZQUN4Qyx5QkFBeUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSx5QkFBeUIsRUFBRSxDQUFDO1NBQ3JFO1FBQ0QsT0FBTyx5QkFBeUIsQ0FBQyxRQUFRLENBQUM7SUFDM0MsQ0FBQztJQUVELGdCQUFnQjtRQUNmLE9BQU87WUFDTixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxNQUFNO1lBQ2YsUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxRQUFRO1NBQ2pCLENBQUM7SUFDSCxDQUFDO0lBRUQsY0FBYztRQUNiLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsZUFBZSxDQUFDLElBQWdCO1FBRS9CLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDN0MsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQzFCO2FBQU07WUFDTixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDeEI7SUFFRixDQUFDOztBQW5DYyxrQ0FBUSxHQUE4QixJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuLi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuLi8uLi92aWV3LmVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24gZXh0ZW5kcyBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uID0gbnVsbDtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbiB7XG5cdFx0aWYgKCFCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlKSB7XG5cdFx0XHRCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlID0gbmV3IEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24oKTtcblx0XHR9XG5cdFx0cmV0dXJuIEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2U7XG5cdH1cblxuXHRnZXRQb3NzaWJsZVZpZXdzKCk6IEFycmF5PENlbGxWaWV3PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdENlbGxWaWV3LlRFWFQsXG5cdFx0XHRDZWxsVmlldy5JVEFMSUMsXG5cdFx0XHRDZWxsVmlldy5DSElQLFxuXHRcdFx0Q2VsbFZpZXcuQk9MRCxcblx0XHRcdENlbGxWaWV3LkNIRUNLQk9YXG5cdFx0XTtcblx0fVxuXG5cdGdldERlZmF1bHRWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblx0fVxuXG5cdGdldERlZmF1bHRBbGlnbih2aWV3OiBWaWV3RW50aXR5KTogQ29sdW1uQWxpZ24ge1xuXG5cdFx0aWYgKHZpZXcuZ2V0Q2VsbFZpZXcoKSA9PT0gQ2VsbFZpZXcuQ0hFQ0tCT1gpIHtcblx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5DRU5URVI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5MRUZUO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=