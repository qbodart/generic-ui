import { Dependency } from './dependency';
export class RecordFactory {
    constructor(provider) {
        this.provider = provider;
    }
    getDeps() {
        return (this.provider.services || []).map((service) => new Dependency(service));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL2RpL2xpYi9wcm92aWRlci9yZWNvcmQuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTFDLE1BQU0sT0FBZ0IsYUFBYTtJQUVsQyxZQUF5QyxRQUF1QjtRQUF2QixhQUFRLEdBQVIsUUFBUSxDQUFlO0lBQ2hFLENBQUM7SUFJRCxPQUFPO1FBQ04sT0FBTyxDQUFFLElBQUksQ0FBQyxRQUFnQixDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xhc3NQcm92aWRlciB9IGZyb20gJy4vY2xhc3MvY2xhc3MtcHJvdmlkZXInO1xuaW1wb3J0IHsgRGVwZW5kZW5jeSB9IGZyb20gJy4vZGVwZW5kZW5jeSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZWNvcmRGYWN0b3J5IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IHByb3ZpZGVyOiBDbGFzc1Byb3ZpZGVyKSB7XG5cdH1cblxuXHRhYnN0cmFjdCBjcmVhdGUoZGVwc0luc3RhbmNlczogUmVhZG9ubHlBcnJheTxhbnk+KTogYW55O1xuXG5cdGdldERlcHMoKTogUmVhZG9ubHlBcnJheTxEZXBlbmRlbmN5PiB7XG5cdFx0cmV0dXJuICgodGhpcy5wcm92aWRlciBhcyBhbnkpLnNlcnZpY2VzIHx8IFtdKS5tYXAoKHNlcnZpY2U6IGFueSkgPT4gbmV3IERlcGVuZGVuY3koc2VydmljZSkpO1xuXHR9XG5cbn1cbiJdfQ==