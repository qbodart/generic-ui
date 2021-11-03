import { SUMMARIES_CALCULATORS } from './calculation/summaries.calculators.token';
export function provideSummariesCalculator(clazz) {
    return {
        provide: SUMMARIES_CALCULATORS,
        useClass: clazz,
        multi: true
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zdW1tYXJpZXMucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBR2xGLE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxLQUFnQjtJQUMxRCxPQUFPO1FBQ04sT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixRQUFRLEVBQUUsS0FBSztRQUNmLEtBQUssRUFBRSxJQUFJO0tBQ1gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU1VNTUFSSUVTX0NBTENVTEFUT1JTIH0gZnJvbSAnLi9jYWxjdWxhdGlvbi9zdW1tYXJpZXMuY2FsY3VsYXRvcnMudG9rZW4nO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3VtbWFyaWVzQ2FsY3VsYXRvcihjbGF6ejogVHlwZTxhbnk+KTogUHJvdmlkZXIge1xuXHRyZXR1cm4ge1xuXHRcdHByb3ZpZGU6IFNVTU1BUklFU19DQUxDVUxBVE9SUyxcblx0XHR1c2VDbGFzczogY2xhenosXG5cdFx0bXVsdGk6IHRydWVcblx0fTtcbn1cbiJdfQ==