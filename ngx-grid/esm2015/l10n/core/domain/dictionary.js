export class Dictionary {
    constructor() {
        this.translation = new Map();
        this.resolver = (key, value) => value;
    }
    changeTranslation(change) {
        for (const key of Object.keys(change)) {
            this.translation.set(key, change[key]);
        }
    }
    getTranslation() {
        return Array.from(this.translation)
            .reduce((obj, [key, value]) => (Object.assign(obj, { [key]: this.resolver(key, value) })), {});
    }
    setResolver(resolver) {
        this.resolver = resolver;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdGlvbmFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvbDEwbi9jb3JlL2RvbWFpbi9kaWN0aW9uYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sT0FBTyxVQUFVO0lBQXZCO1FBRWtCLGdCQUFXLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBRXRFLGFBQVEsR0FBMkMsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFtQmxHLENBQUM7SUFqQkEsaUJBQWlCLENBQUMsTUFBdUM7UUFDeEQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN2QztJQUNGLENBQUM7SUFFRCxjQUFjO1FBQ2IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDL0IsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUM5QixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUN4RCxFQUFFLEVBQUUsQ0FBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQWdEO1FBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zbGF0aW9uQ2hhbmdlIH0gZnJvbSAnLi4vYXBpL3RyYW5zbGF0aW9uLWNoYW5nZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2FwaS90cmFuc2xhdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBEaWN0aW9uYXJ5IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRyYW5zbGF0aW9uOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuXHRwcml2YXRlIHJlc29sdmVyOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZyA9IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gdmFsdWU7XG5cblx0Y2hhbmdlVHJhbnNsYXRpb24oY2hhbmdlOiBUcmFuc2xhdGlvbkNoYW5nZSB8IFRyYW5zbGF0aW9uKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoY2hhbmdlKSkge1xuXHRcdFx0dGhpcy50cmFuc2xhdGlvbi5zZXQoa2V5LCBjaGFuZ2Vba2V5XSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0VHJhbnNsYXRpb24oKTogVHJhbnNsYXRpb24ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMudHJhbnNsYXRpb24pXG5cdFx0XHRcdFx0LnJlZHVjZSgob2JqLCBba2V5LCB2YWx1ZV0pID0+IChcblx0XHRcdFx0XHRcdE9iamVjdC5hc3NpZ24ob2JqLCB7IFtrZXldOiB0aGlzLnJlc29sdmVyKGtleSwgdmFsdWUpIH0pXG5cdFx0XHRcdFx0KSwge30pIGFzIFRyYW5zbGF0aW9uO1xuXHR9XG5cblx0c2V0UmVzb2x2ZXIocmVzb2x2ZXI6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZXNvbHZlciA9IHJlc29sdmVyO1xuXHR9XG5cbn1cbiJdfQ==