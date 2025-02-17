import { HermesReplaySubject } from '@generic-ui/hermes';
export class ChangedValueEmitter {
    constructor() {
        this.subject$ = new HermesReplaySubject(1);
    }
    emit(value) {
        this.subject$.next(value);
    }
    on() {
        return this.subject$.toObservable();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlZC12YWx1ZS5lbWl0dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL2NvbXBvc2l0aW9uL3NyYy9jb2x1bW4vZWRpdC9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNFLE1BQU0sT0FBTyxtQkFBbUI7SUFJL0I7UUFGUSxhQUFRLEdBQUcsSUFBSSxtQkFBbUIsQ0FBSSxDQUFDLENBQUMsQ0FBQztJQUdqRCxDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQVE7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsRUFBRTtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNSZXBsYXlTdWJqZWN0IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuZXhwb3J0IGNsYXNzIENoYW5nZWRWYWx1ZUVtaXR0ZXI8VD4ge1xuXG5cdHByaXZhdGUgc3ViamVjdCQgPSBuZXcgSGVybWVzUmVwbGF5U3ViamVjdDxUPigxKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdGVtaXQodmFsdWU6IFQpOiB2b2lkIHtcblx0XHR0aGlzLnN1YmplY3QkLm5leHQodmFsdWUpO1xuXHR9XG5cblx0b24oKTogSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3ViamVjdCQudG9PYnNlcnZhYmxlKCk7XG5cdH1cbn1cbiJdfQ==