import { Optional } from '@generic-ui/hermes';
export class FieldMatchers {
    constructor(matcher, sortMatcher, searchMatcher) {
        this.matcher = matcher;
        this.sortMatcher = sortMatcher;
        this.searchMatcher = searchMatcher;
    }
    getMatcher() {
        return Optional.of(this.matcher);
    }
    getSortMatcher() {
        let matcher;
        if (this.sortMatcher) {
            matcher = this.sortMatcher;
        }
        if (this.matcher) {
            matcher = this.matcher;
        }
        return Optional.of(matcher);
    }
    getSearchMatcher() {
        let matcher;
        if (this.searchMatcher) {
            matcher = this.searchMatcher;
        }
        if (this.matcher) {
            matcher = this.matcher;
        }
        return Optional.of(matcher);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubWF0Y2hlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL2ZpZWxkL3NyYy9kb21haW4vbWF0Y2hlci9maWVsZC5tYXRjaGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJOUMsTUFBTSxPQUFPLGFBQWE7SUFFekIsWUFBNkIsT0FBMEIsRUFDbkMsV0FBOEIsRUFDOUIsYUFBZ0M7UUFGdkIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDbkMsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUNwRCxDQUFDO0lBRUQsVUFBVTtRQUNULE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGNBQWM7UUFFYixJQUFJLE9BQU8sQ0FBQztRQUVaLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMzQjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtRQUVELE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZ0JBQWdCO1FBRWYsSUFBSSxPQUFPLENBQUM7UUFFWixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDN0I7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7UUFFRCxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJUeXBlIH0gZnJvbSAnLi9maWVsZC5tYXRjaGVyLnR5cGUnO1xuXG5leHBvcnQgY2xhc3MgRmllbGRNYXRjaGVycyB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtYXRjaGVyPzogRmllbGRNYXRjaGVyVHlwZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0TWF0Y2hlcj86IEZpZWxkTWF0Y2hlclR5cGUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoTWF0Y2hlcj86IEZpZWxkTWF0Y2hlclR5cGUpIHsgLy8gVE9ET1xuXHR9XG5cblx0Z2V0TWF0Y2hlcigpOiBPcHRpb25hbDxGaWVsZE1hdGNoZXJUeXBlPiB7XG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMubWF0Y2hlcik7XG5cdH1cblxuXHRnZXRTb3J0TWF0Y2hlcigpOiBPcHRpb25hbDxGaWVsZE1hdGNoZXJUeXBlPiB7XG5cblx0XHRsZXQgbWF0Y2hlcjtcblxuXHRcdGlmICh0aGlzLnNvcnRNYXRjaGVyKSB7XG5cdFx0XHRtYXRjaGVyID0gdGhpcy5zb3J0TWF0Y2hlcjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5tYXRjaGVyKSB7XG5cdFx0XHRtYXRjaGVyID0gdGhpcy5tYXRjaGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiBPcHRpb25hbC5vZihtYXRjaGVyKTtcblx0fVxuXG5cdGdldFNlYXJjaE1hdGNoZXIoKTogT3B0aW9uYWw8RmllbGRNYXRjaGVyVHlwZT4ge1xuXG5cdFx0bGV0IG1hdGNoZXI7XG5cblx0XHRpZiAodGhpcy5zZWFyY2hNYXRjaGVyKSB7XG5cdFx0XHRtYXRjaGVyID0gdGhpcy5zZWFyY2hNYXRjaGVyO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm1hdGNoZXIpIHtcblx0XHRcdG1hdGNoZXIgPSB0aGlzLm1hdGNoZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKG1hdGNoZXIpO1xuXHR9XG59XG4iXX0=