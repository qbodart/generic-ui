import { ReactiveService } from './reactive.service';
import { KeyMap } from './collections/key-map';
import { Optional } from './optional';
import { hermesFilter } from './stream/operator/hermes.filter';
import { hermesMap } from './stream/operator/hermes.map';
import { hermesDistinctUntilChanged } from './stream/operator/hermes.distinct-until-changed';
import { HermesArchiveSubject } from './stream/observable/hermes.archive-subject';
import { hermesTake } from './stream/operator/hermes.take';
export class KeyArchive extends ReactiveService {
    constructor(defaultValue) {
        super();
        this.archive = new KeyMap();
        this.defaultValue = Optional.empty();
        this.archive$ = HermesArchiveSubject.of();
        if (defaultValue !== undefined && defaultValue !== null) {
            this.defaultValue = Optional.of(defaultValue);
        }
    }
    on(key) {
        this.tryToInitDefault(key);
        return this.archive$
            .toObservable()
            .pipe(hermesFilter(() => this.isNotStopped()), hermesMap((map) => {
            return map.get(key);
        }), hermesFilter((value) => value.isPresent()), hermesMap((value) => value.getValueOrNullOrThrowError()), hermesDistinctUntilChanged(this.equals), this.hermesTakeUntil());
    }
    once(key) {
        return this.on(key)
            .pipe(hermesTake(1));
    }
    get(key) {
        this.tryToInitDefault(key);
        return this.archive.get(key);
    }
    next(key, value) {
        this.archive.set(key, value);
        this.archive$.next(this.archive);
    }
    equals(a, b) {
        return a === b;
    }
    createDefaultValue(defaultValue) {
        return defaultValue;
    }
    tryToInitDefault(key) {
        this.defaultValue
            .ifPresent((value) => {
            if (!this.archive.has(key)) {
                this.next(key, value);
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LmFyY2hpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL2tleS5hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUkzRCxNQUFNLE9BQWdCLFVBQTZCLFNBQVEsZUFBZTtJQVF6RSxZQUFzQixZQUFnQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQVBRLFlBQU8sR0FBRyxJQUFJLE1BQU0sRUFBUSxDQUFDO1FBSXRDLGlCQUFZLEdBQWdCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUtwRCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTFDLElBQUksWUFBWSxLQUFLLFNBQVMsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ3hELElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5QztJQUNGLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBTTtRQUVSLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzQixPQUFPLElBQUksQ0FBQyxRQUFRO2FBQ2QsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsRUFDdkMsU0FBUyxDQUFDLENBQUMsR0FBaUIsRUFBRSxFQUFFO1lBQy9CLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsRUFDRixZQUFZLENBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsRUFDdkQsU0FBUyxDQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixFQUFFLENBQUMsRUFDckUsMEJBQTBCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUN2QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQU07UUFFVixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO2FBQ2IsSUFBSSxDQUNKLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FDYixDQUFDO0lBQ1IsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFNO1FBRVQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFNLEVBQUUsS0FBUTtRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFUyxNQUFNLENBQUMsQ0FBSSxFQUFFLENBQUk7UUFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFUyxrQkFBa0IsQ0FBQyxZQUFlO1FBQzNDLE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxHQUFNO1FBQzlCLElBQUksQ0FBQyxZQUFZO2FBQ2YsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFFcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN0QjtRQUVGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3RpdmVTZXJ2aWNlIH0gZnJvbSAnLi9yZWFjdGl2ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEtleU1hcCB9IGZyb20gJy4vY29sbGVjdGlvbnMva2V5LW1hcCc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vb3B0aW9uYWwnO1xuaW1wb3J0IHsgaGVybWVzRmlsdGVyIH0gZnJvbSAnLi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLmZpbHRlcic7XG5pbXBvcnQgeyBoZXJtZXNNYXAgfSBmcm9tICcuL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMubWFwJztcbmltcG9ydCB7IGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAnLi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLmRpc3RpbmN0LXVudGlsLWNoYW5nZWQnO1xuaW1wb3J0IHsgSGVybWVzQXJjaGl2ZVN1YmplY3QgfSBmcm9tICcuL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5hcmNoaXZlLXN1YmplY3QnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJy4vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgaGVybWVzVGFrZSB9IGZyb20gJy4vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy50YWtlJztcbmltcG9ydCB7IEtleSB9IGZyb20gJy4vY29sbGVjdGlvbnMva2V5JztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgS2V5QXJjaGl2ZTxLIGV4dGVuZHMgS2V5LCBUPiBleHRlbmRzIFJlYWN0aXZlU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhcmNoaXZlID0gbmV3IEtleU1hcDxLLCBUPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYXJjaGl2ZSQ6IEhlcm1lc0FyY2hpdmVTdWJqZWN0PEtleU1hcDxLLCBUPj47XG5cblx0cHJpdmF0ZSBkZWZhdWx0VmFsdWU6IE9wdGlvbmFsPFQ+ID0gT3B0aW9uYWwuZW1wdHkoKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoZGVmYXVsdFZhbHVlPzogVCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmFyY2hpdmUkID0gSGVybWVzQXJjaGl2ZVN1YmplY3Qub2YoKTtcblxuXHRcdGlmIChkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0VmFsdWUgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuZGVmYXVsdFZhbHVlID0gT3B0aW9uYWwub2YoZGVmYXVsdFZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRvbihrZXk6IEspOiBIZXJtZXNPYnNlcnZhYmxlPFQ+IHtcblxuXHRcdHRoaXMudHJ5VG9Jbml0RGVmYXVsdChrZXkpO1xuXG5cdFx0cmV0dXJuIHRoaXMuYXJjaGl2ZSRcblx0XHRcdFx0ICAgLnRvT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc0ZpbHRlcigoKSA9PiB0aGlzLmlzTm90U3RvcHBlZCgpKSxcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKG1hcDogS2V5TWFwPEssIFQ+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmdldChrZXkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGhlcm1lc0ZpbHRlcigodmFsdWU6IE9wdGlvbmFsPFQ+KSA9PiB2YWx1ZS5pc1ByZXNlbnQoKSksXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKCh2YWx1ZTogT3B0aW9uYWw8VD4pID0+IHZhbHVlLmdldFZhbHVlT3JOdWxsT3JUaHJvd0Vycm9yKCkpLFxuXHRcdFx0XHRcdCAgIGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkKHRoaXMuZXF1YWxzKSxcblx0XHRcdFx0XHQgICB0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbmNlKGtleTogSyk6IEhlcm1lc09ic2VydmFibGU8VD4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub24oa2V5KVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNUYWtlKDEpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRnZXQoa2V5OiBLKTogT3B0aW9uYWw8VD4ge1xuXG5cdFx0dGhpcy50cnlUb0luaXREZWZhdWx0KGtleSk7XG5cblx0XHRyZXR1cm4gdGhpcy5hcmNoaXZlLmdldChrZXkpO1xuXHR9XG5cblx0bmV4dChrZXk6IEssIHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5hcmNoaXZlLnNldChrZXksIHZhbHVlKTtcblx0XHR0aGlzLmFyY2hpdmUkLm5leHQodGhpcy5hcmNoaXZlKTtcblx0fVxuXG5cdHByb3RlY3RlZCBlcXVhbHMoYTogVCwgYjogVCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBhID09PSBiO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNyZWF0ZURlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWU6IFQpOiBUIHtcblx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlO1xuXHR9XG5cblx0cHJpdmF0ZSB0cnlUb0luaXREZWZhdWx0KGtleTogSyk6IHZvaWQge1xuXHRcdHRoaXMuZGVmYXVsdFZhbHVlXG5cdFx0XHQuaWZQcmVzZW50KCh2YWx1ZSkgPT4ge1xuXG5cdFx0XHRcdGlmICghdGhpcy5hcmNoaXZlLmhhcyhrZXkpKSB7XG5cdFx0XHRcdFx0dGhpcy5uZXh0KGtleSwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==