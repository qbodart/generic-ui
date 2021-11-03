import { HermesObservable } from '../../common/stream/observable/hermes.observable';
export function fromRxJsObservable(source$) {
    return new HermesObservable((observer) => {
        const subscription = source$.subscribe((value) => observer.next(value), (error) => observer.error(error), () => observer.complete());
        return () => subscription.unsubscribe();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS1yeGpzLW9ic2VydmFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvaW5mcmFzdHJ1Y3R1cmUvcnhqcy9mcm9tLXJ4anMtb2JzZXJ2YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUdwRixNQUFNLFVBQVUsa0JBQWtCLENBQUksT0FBc0I7SUFDM0QsT0FBTyxJQUFJLGdCQUFnQixDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDeEMsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FDckMsQ0FBQyxLQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQ2xDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUNyQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQ3pCLENBQUM7UUFDRixPQUFPLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21SeEpzT2JzZXJ2YWJsZTxUPihzb3VyY2UkOiBPYnNlcnZhYmxlPFQ+KTogSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cdHJldHVybiBuZXcgSGVybWVzT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcblx0XHRjb25zdCBzdWJzY3JpcHRpb24gPSBzb3VyY2UkLnN1YnNjcmliZShcblx0XHRcdCh2YWx1ZTogVCkgPT4gb2JzZXJ2ZXIubmV4dCh2YWx1ZSksXG5cdFx0XHQoZXJyb3I6IGFueSkgPT4gb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpLFxuXHRcdFx0KCkgPT4gb2JzZXJ2ZXIuY29tcGxldGUoKVxuXHRcdCk7XG5cdFx0cmV0dXJuICgpID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHR9KTtcbn1cbiJdfQ==