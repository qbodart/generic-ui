import { UniqueValueId } from './unique-value-id';
export class UniqueValueIdGenerator {
    static generate() {
        UniqueValueIdGenerator.index += 1;
        return new UniqueValueId(`${UniqueValueIdGenerator.index}`);
    }
}
UniqueValueIdGenerator.index = 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLmlkLWdlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZS5pZC1nZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxELE1BQU0sT0FBTyxzQkFBc0I7SUFJbEMsTUFBTSxDQUFDLFFBQVE7UUFFZCxzQkFBc0IsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBRWxDLE9BQU8sSUFBSSxhQUFhLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7O0FBUE0sNEJBQUssR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVbmlxdWVWYWx1ZUlkIH0gZnJvbSAnLi91bmlxdWUtdmFsdWUtaWQnO1xuXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsdWVJZEdlbmVyYXRvciB7XG5cblx0c3RhdGljIGluZGV4ID0gMDtcblxuXHRzdGF0aWMgZ2VuZXJhdGUoKTogVW5pcXVlVmFsdWVJZCB7XG5cblx0XHRVbmlxdWVWYWx1ZUlkR2VuZXJhdG9yLmluZGV4ICs9IDE7XG5cblx0XHRyZXR1cm4gbmV3IFVuaXF1ZVZhbHVlSWQoYCR7VW5pcXVlVmFsdWVJZEdlbmVyYXRvci5pbmRleH1gKTtcblx0fVxuXG59XG4iXX0=