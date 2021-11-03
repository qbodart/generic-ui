import { BaseFilterType } from '../../base-filter-type';
export class ContainsFilterType extends BaseFilterType {
    constructor(filterTypeId) {
        super(filterTypeId);
    }
    getName() {
        return 'Contains';
    }
    filterEntity(entity, field, value) {
        const fieldValue = field.getValue(entity);
        return !!fieldValue.includes(value);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbnMtZmlsdGVyLXR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vdHlwZS9maWx0ZXItdHlwZXMvY29udGFpbnMvY29udGFpbnMtZmlsdGVyLXR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBS3hELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxjQUFzQjtJQUU3RCxZQUFZLFlBQTBCO1FBQ3JDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsT0FBTztRQUNOLE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7SUFFUyxZQUFZLENBQUMsTUFBd0IsRUFBRSxLQUFZLEVBQUUsS0FBYTtRQUUzRSxNQUFNLFVBQVUsR0FBVyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxELE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUZpbHRlclR5cGUgfSBmcm9tICcuLi8uLi9iYXNlLWZpbHRlci10eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZCB9IGZyb20gJy4uLy4uL2ZpbHRlci10eXBlLmlkJztcblxuZXhwb3J0IGNsYXNzIENvbnRhaW5zRmlsdGVyVHlwZSBleHRlbmRzIEJhc2VGaWx0ZXJUeXBlPHN0cmluZz4ge1xuXG5cdGNvbnN0cnVjdG9yKGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkKSB7XG5cdFx0c3VwZXIoZmlsdGVyVHlwZUlkKTtcblx0fVxuXG5cdGdldE5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ0NvbnRhaW5zJztcblx0fVxuXG5cdHByb3RlY3RlZCBmaWx0ZXJFbnRpdHkoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5LCBmaWVsZDogRmllbGQsIHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcblxuXHRcdGNvbnN0IGZpZWxkVmFsdWU6IHN0cmluZyA9IGZpZWxkLmdldFZhbHVlKGVudGl0eSk7XG5cblx0XHRyZXR1cm4gISFmaWVsZFZhbHVlLmluY2x1ZGVzKHZhbHVlKTtcblx0fVxufVxuIl19