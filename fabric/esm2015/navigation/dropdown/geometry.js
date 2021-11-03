export class Geometry {
    constructor(container, menu, windowSize) {
        this.container = container;
        this.menu = menu;
        this.windowSize = windowSize;
        this.calculate(this.menu, this.windowSize);
    }
    getContainerHeight() {
        return this.containerHeight;
    }
    getContainerWidth() {
        return this.containerWidth;
    }
    canOpenDownward() {
        return this.availableBottomSpace > 0;
    }
    canOpenUpward() {
        return this.availableTopSpace > 0;
    }
    calculate(menu, windowSize) {
        const containerEl = this.container.nativeElement, menuHeight = menu.nativeElement.offsetHeight, rectBottom = containerEl.getBoundingClientRect().bottom;
        this.containerHeight = containerEl.offsetHeight;
        this.containerWidth = containerEl.offsetWidth;
        this.availableBottomSpace = windowSize - rectBottom - menuHeight;
        this.availableTopSpace = rectBottom - menuHeight - this.containerHeight;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbmF2aWdhdGlvbi9kcm9wZG93bi9nZW9tZXRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sUUFBUTtJQU1wQixZQUFvQixTQUFxQixFQUM5QixJQUFnQixFQUNoQixVQUFrQjtRQUZULGNBQVMsR0FBVCxTQUFTLENBQVk7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGtCQUFrQjtRQUNqQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDN0IsQ0FBQztJQUVELGlCQUFpQjtRQUNoQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLFNBQVMsQ0FBQyxJQUFnQixFQUFFLFVBQWtCO1FBQ3JELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUMvQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQzVDLFVBQVUsR0FBRyxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDekQsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUM5QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDakUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUN6RSxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBHZW9tZXRyeSB7XG5cdHByaXZhdGUgY29udGFpbmVySGVpZ2h0OiBudW1iZXI7XG5cdHByaXZhdGUgY29udGFpbmVyV2lkdGg6IG51bWJlcjtcblx0cHJpdmF0ZSBhdmFpbGFibGVCb3R0b21TcGFjZTogbnVtYmVyO1xuXHRwcml2YXRlIGF2YWlsYWJsZVRvcFNwYWNlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgbWVudTogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSB3aW5kb3dTaXplOiBudW1iZXIpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZSh0aGlzLm1lbnUsIHRoaXMud2luZG93U2l6ZSk7XG5cdH1cblxuXHRnZXRDb250YWluZXJIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb250YWluZXJIZWlnaHQ7XG5cdH1cblxuXHRnZXRDb250YWluZXJXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvbnRhaW5lcldpZHRoO1xuXHR9XG5cblx0Y2FuT3BlbkRvd253YXJkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmF2YWlsYWJsZUJvdHRvbVNwYWNlID4gMDtcblx0fVxuXG5cdGNhbk9wZW5VcHdhcmQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYXZhaWxhYmxlVG9wU3BhY2UgPiAwO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGUobWVudTogRWxlbWVudFJlZiwgd2luZG93U2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0Y29uc3QgY29udGFpbmVyRWwgPSB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxuXHRcdFx0bWVudUhlaWdodCA9IG1lbnUubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQsXG5cdFx0XHRyZWN0Qm90dG9tID0gY29udGFpbmVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuXHRcdHRoaXMuY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyRWwub2Zmc2V0SGVpZ2h0O1xuXHRcdHRoaXMuY29udGFpbmVyV2lkdGggPSBjb250YWluZXJFbC5vZmZzZXRXaWR0aDtcblx0XHR0aGlzLmF2YWlsYWJsZUJvdHRvbVNwYWNlID0gd2luZG93U2l6ZSAtIHJlY3RCb3R0b20gLSBtZW51SGVpZ2h0O1xuXHRcdHRoaXMuYXZhaWxhYmxlVG9wU3BhY2UgPSByZWN0Qm90dG9tIC0gbWVudUhlaWdodCAtIHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXHR9XG59XG4iXX0=