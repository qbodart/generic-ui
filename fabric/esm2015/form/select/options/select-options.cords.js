export class SelectOptionsCords {
    constructor(element, selectContainerGeometry, window) {
        this.element = element;
        this.selectContainerGeometry = selectContainerGeometry;
        this.window = window;
        this.calculateCords(element, selectContainerGeometry);
    }
    getVerticalPosition() {
        return this.verticalPosition;
    }
    getHorizontalPosition() {
        return this.horizontalPosition;
    }
    getCanOpenUpward() {
        return this.canOpenUpward;
    }
    calculateCords(element, selectOptionsGeometry) {
        const elementRect = element.nativeElement.getBoundingClientRect(), elementBottom = this.window.pageYOffset + elementRect.bottom, elementLeft = this.window.pageXOffset + elementRect.left;
        this.horizontalPosition = elementLeft;
        this.verticalPosition = elementBottom - SelectOptionsCords.BORDER_WIDTH;
        this.calculateDirection(selectOptionsGeometry, element);
    }
    calculateDirection(selectOptionsGeometry, element) {
        const windowHeight = this.window.innerHeight + this.window.pageYOffset, elementHeight = element.nativeElement.offsetHeight, selectOptionsHeight = selectOptionsGeometry.getHeight();
        const selectOptionsDoesNotFitVertically = (windowHeight - this.verticalPosition - selectOptionsHeight) < 0;
        if (selectOptionsDoesNotFitVertically) {
            this.canOpenUpward = true;
            this.verticalPosition -= selectOptionsHeight + elementHeight - SelectOptionsCords.BORDER_WIDTH;
        }
    }
}
SelectOptionsCords.BORDER_WIDTH = 1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbnMuY29yZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9zZWxlY3Qvb3B0aW9ucy9zZWxlY3Qtb3B0aW9ucy5jb3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLE9BQU8sa0JBQWtCO0lBUzlCLFlBQTZCLE9BQW1CLEVBQzVCLHVCQUE4QyxFQUM5QyxNQUFjO1FBRkwsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUM1Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXVCO1FBQzlDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7SUFFRCxxQkFBcUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQztJQUVELGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBRU8sY0FBYyxDQUFDLE9BQW1CLEVBQUUscUJBQTRDO1FBRXZGLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsRUFDaEUsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQzVELFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBRTFELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxZQUFZLENBQUM7UUFDeEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxxQkFBNEMsRUFBRSxPQUFtQjtRQUMzRixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFDckUsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUNsRCxtQkFBbUIsR0FBRyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV6RCxNQUFNLGlDQUFpQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzRyxJQUFJLGlDQUFpQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxtQkFBbUIsR0FBRyxhQUFhLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxDQUFDO1NBQy9GO0lBQ0YsQ0FBQzs7QUFoRHVCLCtCQUFZLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VsZWN0T3B0aW9uc0dlb21ldHJ5IH0gZnJvbSAnLi9zZWxlY3QtZ2VvbWV0cnknO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0T3B0aW9uc0NvcmRzIHtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQk9SREVSX1dJRFRIID0gMTtcblxuXHRwcml2YXRlIHZlcnRpY2FsUG9zaXRpb246IG51bWJlcjtcblxuXHRwcml2YXRlIGhvcml6b250YWxQb3NpdGlvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgY2FuT3BlblVwd2FyZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0Q29udGFpbmVyR2VvbWV0cnk6IFNlbGVjdE9wdGlvbnNHZW9tZXRyeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB3aW5kb3c6IFdpbmRvdykge1xuXHRcdHRoaXMuY2FsY3VsYXRlQ29yZHMoZWxlbWVudCwgc2VsZWN0Q29udGFpbmVyR2VvbWV0cnkpO1xuXHR9XG5cblx0Z2V0VmVydGljYWxQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsUG9zaXRpb247XG5cdH1cblxuXHRnZXRIb3Jpem9udGFsUG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5ob3Jpem9udGFsUG9zaXRpb247XG5cdH1cblxuXHRnZXRDYW5PcGVuVXB3YXJkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNhbk9wZW5VcHdhcmQ7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUNvcmRzKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHNlbGVjdE9wdGlvbnNHZW9tZXRyeTogU2VsZWN0T3B0aW9uc0dlb21ldHJ5KTogdm9pZCB7XG5cblx0XHRjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcblx0XHRcdGVsZW1lbnRCb3R0b20gPSB0aGlzLndpbmRvdy5wYWdlWU9mZnNldCArIGVsZW1lbnRSZWN0LmJvdHRvbSxcblx0XHRcdGVsZW1lbnRMZWZ0ID0gdGhpcy53aW5kb3cucGFnZVhPZmZzZXQgKyBlbGVtZW50UmVjdC5sZWZ0O1xuXG5cdFx0dGhpcy5ob3Jpem9udGFsUG9zaXRpb24gPSBlbGVtZW50TGVmdDtcblx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gPSBlbGVtZW50Qm90dG9tIC0gU2VsZWN0T3B0aW9uc0NvcmRzLkJPUkRFUl9XSURUSDtcblx0XHR0aGlzLmNhbGN1bGF0ZURpcmVjdGlvbihzZWxlY3RPcHRpb25zR2VvbWV0cnksIGVsZW1lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVEaXJlY3Rpb24oc2VsZWN0T3B0aW9uc0dlb21ldHJ5OiBTZWxlY3RPcHRpb25zR2VvbWV0cnksIGVsZW1lbnQ6IEVsZW1lbnRSZWYpOiB2b2lkIHtcblx0XHRjb25zdCB3aW5kb3dIZWlnaHQgPSB0aGlzLndpbmRvdy5pbm5lckhlaWdodCArIHRoaXMud2luZG93LnBhZ2VZT2Zmc2V0LFxuXHRcdFx0ZWxlbWVudEhlaWdodCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQsXG5cdFx0XHRzZWxlY3RPcHRpb25zSGVpZ2h0ID0gc2VsZWN0T3B0aW9uc0dlb21ldHJ5LmdldEhlaWdodCgpO1xuXG5cdFx0Y29uc3Qgc2VsZWN0T3B0aW9uc0RvZXNOb3RGaXRWZXJ0aWNhbGx5ID0gKHdpbmRvd0hlaWdodCAtIHRoaXMudmVydGljYWxQb3NpdGlvbiAtIHNlbGVjdE9wdGlvbnNIZWlnaHQpIDwgMDtcblxuXHRcdGlmIChzZWxlY3RPcHRpb25zRG9lc05vdEZpdFZlcnRpY2FsbHkpIHtcblx0XHRcdHRoaXMuY2FuT3BlblVwd2FyZCA9IHRydWU7XG5cdFx0XHR0aGlzLnZlcnRpY2FsUG9zaXRpb24gLT0gc2VsZWN0T3B0aW9uc0hlaWdodCArIGVsZW1lbnRIZWlnaHQgLSBTZWxlY3RPcHRpb25zQ29yZHMuQk9SREVSX1dJRFRIO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=