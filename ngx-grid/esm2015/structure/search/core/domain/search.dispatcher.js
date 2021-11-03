import { Injectable } from '@angular/core';
import { SetConfigSearchingCommand } from './config/set-config-searching.command';
import { SetSearchPhraseCommand } from './phrase/set-phrase/set-search-phrase.command';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
import * as i2 from "./highlight/search-highlight.archive";
import * as i3 from "./placeholder/search-placeholder.archive";
export class SearchDispatcher {
    constructor(commandDispatcher, searchHighlightArchive, searchPlaceholderArchive) {
        this.commandDispatcher = commandDispatcher;
        this.searchHighlightArchive = searchHighlightArchive;
        this.searchPlaceholderArchive = searchPlaceholderArchive;
    }
    setSearchingConfig(config, structureId) {
        if (config.highlighting !== undefined && config.highlighting !== null) {
            this.searchHighlightArchive.next(structureId, config.highlighting);
        }
        if (config.placeholder !== undefined && config.placeholder !== null) {
            this.searchPlaceholderArchive.next(structureId, config.placeholder);
        }
        if (config.phrase !== undefined && config.phrase !== null) {
            this.searchOnInit(config.phrase, structureId);
        }
        this.commandDispatcher.dispatch(new SetConfigSearchingCommand(structureId, config));
    }
    search(phrase, structureId) {
        this.commandDispatcher.dispatch(new SetSearchPhraseCommand(structureId, phrase, false));
    }
    searchOnInit(phrase, structureId) {
        this.commandDispatcher.dispatch(new SetSearchPhraseCommand(structureId, phrase, true));
    }
}
SearchDispatcher.ɵfac = function SearchDispatcher_Factory(t) { return new (t || SearchDispatcher)(i0.ɵɵinject(i1.CommandDispatcher), i0.ɵɵinject(i2.SearchHighlightArchive), i0.ɵɵinject(i3.SearchPlaceholderArchive)); };
SearchDispatcher.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SearchDispatcher, factory: SearchDispatcher.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchDispatcher, [{
        type: Injectable
    }], function () { return [{ type: i1.CommandDispatcher }, { type: i2.SearchHighlightArchive }, { type: i3.SearchPlaceholderArchive }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9zZWFyY2gvY29yZS9kb21haW4vc2VhcmNoLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0zQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7Ozs7QUFNdkYsTUFBTSxPQUFPLGdCQUFnQjtJQUU1QixZQUE2QixpQkFBb0MsRUFDN0Msc0JBQThDLEVBQzlDLHdCQUFrRDtRQUZ6QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUN0RSxDQUFDO0lBRUQsa0JBQWtCLENBQUMsTUFBb0IsRUFBRSxXQUF3QjtRQUVoRSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNuRTtRQUVELElBQUksTUFBTSxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDcEUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3BFO1FBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDOUM7UUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUkseUJBQXlCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFjLEVBQUUsV0FBd0I7UUFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRU8sWUFBWSxDQUFDLE1BQWMsRUFBRSxXQUF3QjtRQUM1RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksc0JBQXNCLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7O2dGQTlCVyxnQkFBZ0I7c0VBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uL2FwaS9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmQgfSBmcm9tICcuL2NvbmZpZy9zZXQtY29uZmlnLXNlYXJjaGluZy5jb21tYW5kJztcbmltcG9ydCB7IFNldFNlYXJjaFBocmFzZUNvbW1hbmQgfSBmcm9tICcuL3BocmFzZS9zZXQtcGhyYXNlL3NldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSB9IGZyb20gJy4vaGlnaGxpZ2h0L3NlYXJjaC1oaWdobGlnaHQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUgfSBmcm9tICcuL3BsYWNlaG9sZGVyL3NlYXJjaC1wbGFjZWhvbGRlci5hcmNoaXZlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZTogU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hQbGFjZWhvbGRlckFyY2hpdmU6IFNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSkge1xuXHR9XG5cblx0c2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZzogU2VhcmNoQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblxuXHRcdGlmIChjb25maWcuaGlnaGxpZ2h0aW5nICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmhpZ2hsaWdodGluZyAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5zZWFyY2hIaWdobGlnaHRBcmNoaXZlLm5leHQoc3RydWN0dXJlSWQsIGNvbmZpZy5oaWdobGlnaHRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcucGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCAmJiBjb25maWcucGxhY2Vob2xkZXIgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuc2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlLm5leHQoc3RydWN0dXJlSWQsIGNvbmZpZy5wbGFjZWhvbGRlcik7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZy5waHJhc2UgIT09IHVuZGVmaW5lZCAmJiBjb25maWcucGhyYXNlICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnNlYXJjaE9uSW5pdChjb25maWcucGhyYXNlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZChzdHJ1Y3R1cmVJZCwgY29uZmlnKSk7XG5cdH1cblxuXHRzZWFyY2gocGhyYXNlOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNlYXJjaFBocmFzZUNvbW1hbmQoc3RydWN0dXJlSWQsIHBocmFzZSwgZmFsc2UpKTtcblx0fVxuXG5cdHByaXZhdGUgc2VhcmNoT25Jbml0KHBocmFzZTogc3RyaW5nLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTZWFyY2hQaHJhc2VDb21tYW5kKHN0cnVjdHVyZUlkLCBwaHJhc2UsIHRydWUpKTtcblx0fVxuXG59XG4iXX0=