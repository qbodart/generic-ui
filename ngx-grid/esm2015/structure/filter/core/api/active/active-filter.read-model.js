export class ActiveFilterReadModel {
    constructor(filterId, fieldName, filterTypeName, value) {
        this.filterId = filterId;
        this.fieldName = fieldName;
        this.filterTypeName = filterTypeName;
        this.value = value;
    }
    getText() {
        return `${this.fieldName}: ${this.filterTypeName}: ${this.value}`;
    }
    getFilterId() {
        return this.filterId;
    }
    getFieldName() {
        return this.fieldName;
    }
    getFilterTypeName() {
        return this.filterTypeName;
    }
    getValue() {
        return this.value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci5yZWFkLW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvYXBpL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLnJlYWQtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLHFCQUFxQjtJQUVqQyxZQUE2QixRQUFrQixFQUMzQixTQUFpQixFQUNqQixjQUFzQixFQUN0QixLQUFVO1FBSEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQUs7SUFDOUIsQ0FBQztJQUVELE9BQU87UUFDTixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDO0lBRUQsaUJBQWlCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWx0ZXJJZCB9IGZyb20gJy4uL2ZpbHRlci5pZCc7XG5cbmV4cG9ydCBjbGFzcyBBY3RpdmVGaWx0ZXJSZWFkTW9kZWwge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmlsdGVySWQ6IEZpbHRlcklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkTmFtZTogc3RyaW5nLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlclR5cGVOYW1lOiBzdHJpbmcsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmFsdWU6IGFueSkge1xuXHR9XG5cblx0Z2V0VGV4dCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBgJHt0aGlzLmZpZWxkTmFtZX06ICR7dGhpcy5maWx0ZXJUeXBlTmFtZX06ICR7dGhpcy52YWx1ZX1gO1xuXHR9XG5cblx0Z2V0RmlsdGVySWQoKTogRmlsdGVySWQge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlcklkO1xuXHR9XG5cblx0Z2V0RmllbGROYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGROYW1lO1xuXHR9XG5cblx0Z2V0RmlsdGVyVHlwZU5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJUeXBlTmFtZTtcblx0fVxuXG5cdGdldFZhbHVlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxufVxuIl19