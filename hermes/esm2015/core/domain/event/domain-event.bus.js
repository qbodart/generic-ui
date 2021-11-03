import { Injectable } from '@angular/core';
import { HermesObservable } from '../../../common/stream/observable/hermes.observable';
import { hermesFilter } from '../../../common/stream/operator/hermes.filter';
import * as i0 from "@angular/core";
import * as i1 from "./domain-event.stream";
export class DomainEventBus extends HermesObservable {
    constructor(eventStream) {
        super();
        this.eventStream = eventStream;
    }
    subscribe(arg) {
        return this.eventStream.toObservable().subscribe(arguments[0], arguments[1], arguments[2]);
    }
    ofEvents(events) {
        return this
            .eventStream
            .toObservable()
            .pipe(hermesFilter((domainEvent) => {
            return events.some((event) => {
                const eventInstance = this.createEventInstance(event);
                return eventInstance.equalsByType(domainEvent);
            });
        }));
    }
    ofEventHandlers(handlers) {
        return this
            .eventStream
            .toObservable()
            .pipe(hermesFilter((event) => {
            return handlers.some((handler) => handler.forEvents([event]));
        }));
    }
    createEventInstance(event) {
        const args = [], argumentLength = event.constructor.length;
        args.fill(undefined, 0, argumentLength);
        if (args.length === 0) {
            return (new event());
        }
        else if (args.length === 1) {
            return (new event(args[0]));
        }
        else if (args.length === 2) {
            return (new event(args[0], args[1]));
        }
        else if (args.length === 3) {
            return (new event(args[0], args[1], args[2]));
        }
        else if (args.length === 4) {
            return (new event(args[0], args[1], args[2], args[3]));
        }
        else if (args.length === 5) {
            return (new event(args[0], args[1], args[2], args[3], args[4]));
        }
        else {
            throw new Error('DomainEventBus constructor out of arguments');
        }
    }
}
DomainEventBus.ɵfac = function DomainEventBus_Factory(t) { return new (t || DomainEventBus)(i0.ɵɵinject(i1.DomainEventStream)); };
DomainEventBus.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DomainEventBus, factory: DomainEventBus.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DomainEventBus, [{
        type: Injectable
    }], function () { return [{ type: i1.DomainEventStream }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmJ1cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb3JlL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7QUFLN0UsTUFBTSxPQUFPLGNBQTZDLFNBQVEsZ0JBQW1CO0lBRXBGLFlBQTZCLFdBQThCO1FBQzFELEtBQUssRUFBRSxDQUFDO1FBRG9CLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtJQUUzRCxDQUFDO0lBVUQsU0FBUyxDQUNSLEdBQVE7UUFHUixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVELFFBQVEsQ0FBZSxNQUFpQztRQUN2RCxPQUFRLElBQTRCO2FBQ2xDLFdBQVc7YUFDWCxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osWUFBWSxDQUFDLENBQUMsV0FBcUMsRUFBRSxFQUFFO1lBQ3RELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQXlCLEVBQUUsRUFBRTtnQkFDaEQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0RCxPQUFPLGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWUsQ0FBZSxRQUE4RTtRQUMzRyxPQUFRLElBQTRCO2FBQ2xDLFdBQVc7YUFDWCxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osWUFBWSxDQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFO1lBQ2hELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQXNFLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUgsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxLQUF5QjtRQUNwRCxNQUFNLElBQUksR0FBZ0IsRUFBRSxFQUMzQixjQUFjLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFFM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRXhDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxDQUFDLElBQUssS0FBYSxFQUFFLENBQUMsQ0FBQztTQUM5QjthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxDQUFDLElBQUssS0FBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckM7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxJQUFLLEtBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QzthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxDQUFDLElBQUssS0FBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2RDthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxDQUFDLElBQUssS0FBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEU7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxJQUFLLEtBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RTthQUFNO1lBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1NBQy9EO0lBQ0YsQ0FBQzs7NEVBbkVXLGNBQWM7b0VBQWQsY0FBYyxXQUFkLGNBQWM7dUZBQWQsY0FBYztjQUQxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4vZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50U3RyZWFtIH0gZnJvbSAnLi9kb21haW4tZXZlbnQuc3RyZWFtJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXJJbXBsIH0gZnJvbSAnLi9oYW5kbGVyL2RvbWFpbi1ldmVudC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBoZXJtZXNGaWx0ZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5maWx0ZXInO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9zdWJzY3JpcHRpb24vaGVybWVzLnN1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL3N1YnNjcmliZXIvaGVybWVzLnN1YnNjcmliZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tYWluRXZlbnRCdXM8RSA9IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4gZXh0ZW5kcyBIZXJtZXNPYnNlcnZhYmxlPEU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGV2ZW50U3RyZWFtOiBEb21haW5FdmVudFN0cmVhbSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdWJzY3JpYmUoXG5cdFx0bmV4dD86ICh2YWx1ZTogRSkgPT4gdm9pZCxcblx0XHRlcnJvcj86IChlcnJvcjogYW55KSA9PiB2b2lkLFxuXHRcdGNvbXBsZXRlPzogKCkgPT4gdm9pZFxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb247XG5cdHN1YnNjcmliZShcblx0XHRzdWJzY3JpYmVyOiBIZXJtZXNTdWJzY3JpYmVyPEU+XG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbjtcblx0c3Vic2NyaWJlKFxuXHRcdGFyZzogYW55XG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbiB7XG5cblx0XHRyZXR1cm4gdGhpcy5ldmVudFN0cmVhbS50b09ic2VydmFibGUoKS5zdWJzY3JpYmUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG5cdH1cblxuXHRvZkV2ZW50czxFMiBleHRlbmRzIEU+KGV2ZW50czogQXJyYXk8dHlwZW9mIERvbWFpbkV2ZW50Pik6IEhlcm1lc09ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuICh0aGlzIGFzIERvbWFpbkV2ZW50QnVzPGFueT4pXG5cdFx0XHQuZXZlbnRTdHJlYW1cblx0XHRcdC50b09ic2VydmFibGUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGhlcm1lc0ZpbHRlcigoZG9tYWluRXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBldmVudHMuc29tZSgoZXZlbnQ6IHR5cGVvZiBEb21haW5FdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgZXZlbnRJbnN0YW5jZSA9IHRoaXMuY3JlYXRlRXZlbnRJbnN0YW5jZShldmVudCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXZlbnRJbnN0YW5jZS5lcXVhbHNCeVR5cGUoZG9tYWluRXZlbnQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdG9mRXZlbnRIYW5kbGVyczxFMiBleHRlbmRzIEU+KGhhbmRsZXJzOiBBcnJheTxEb21haW5FdmVudEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+Pik6IGFueSB7XG5cdFx0cmV0dXJuICh0aGlzIGFzIERvbWFpbkV2ZW50QnVzPGFueT4pXG5cdFx0XHQuZXZlbnRTdHJlYW1cblx0XHRcdC50b09ic2VydmFibGUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGhlcm1lc0ZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBoYW5kbGVycy5zb21lKChoYW5kbGVyOiBEb21haW5FdmVudEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+KSA9PiBoYW5kbGVyLmZvckV2ZW50cyhbZXZlbnRdKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVFdmVudEluc3RhbmNlKGV2ZW50OiB0eXBlb2YgRG9tYWluRXZlbnQpOiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4ge1xuXHRcdGNvbnN0IGFyZ3M6IEFycmF5PHZvaWQ+ID0gW10sXG5cdFx0XHRhcmd1bWVudExlbmd0aCA9IGV2ZW50LmNvbnN0cnVjdG9yLmxlbmd0aDtcblxuXHRcdGFyZ3MuZmlsbCh1bmRlZmluZWQsIDAsIGFyZ3VtZW50TGVuZ3RoKTtcblxuXHRcdGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIChuZXcgKGV2ZW50IGFzIGFueSkoKSk7XG5cdFx0fSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0cmV0dXJuIChuZXcgKGV2ZW50IGFzIGFueSkoYXJnc1swXSkpO1xuXHRcdH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcblx0XHRcdHJldHVybiAobmV3IChldmVudCBhcyBhbnkpKGFyZ3NbMF0sIGFyZ3NbMV0pKTtcblx0XHR9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAzKSB7XG5cdFx0XHRyZXR1cm4gKG5ldyAoZXZlbnQgYXMgYW55KShhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKSk7XG5cdFx0fSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gNCkge1xuXHRcdFx0cmV0dXJuIChuZXcgKGV2ZW50IGFzIGFueSkoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSkpO1xuXHRcdH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDUpIHtcblx0XHRcdHJldHVybiAobmV3IChldmVudCBhcyBhbnkpKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0pKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdEb21haW5FdmVudEJ1cyBjb25zdHJ1Y3RvciBvdXQgb2YgYXJndW1lbnRzJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==