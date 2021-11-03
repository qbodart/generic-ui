import { GenericBuilder } from '../../../../common/cdk/generic-builder';
export var RowSelectionType;
(function (RowSelectionType) {
    RowSelectionType[RowSelectionType["ROW"] = 0] = "ROW";
    RowSelectionType[RowSelectionType["CHECKBOX"] = 1] = "CHECKBOX";
})(RowSelectionType || (RowSelectionType = {}));
export var RowSelectionMode;
(function (RowSelectionMode) {
    RowSelectionMode[RowSelectionMode["SINGLE"] = 0] = "SINGLE";
    RowSelectionMode[RowSelectionMode["MULTIPLE"] = 1] = "MULTIPLE";
})(RowSelectionMode || (RowSelectionMode = {}));
export class RowSelection {
    constructor(config) {
        if (config.enabled !== undefined) {
            this.enabled = config.enabled;
        }
        if (config.mode !== undefined) {
            this.mode = config.mode;
        }
        if (config.type !== undefined) {
            this.type = config.type;
        }
    }
    isModeDefined() {
        return this.mode !== undefined;
    }
    isTypeDefined() {
        return this.type !== undefined;
    }
    isEnabledDefined() {
        return this.enabled !== undefined;
    }
    isEnabled() {
        return this.enabled;
    }
    getMode() {
        return this.mode;
    }
    getType() {
        return this.type;
    }
}
RowSelection.Builder = class RowSelectionBuilder extends GenericBuilder {
    constructor() {
        super();
    }
    buildObject() {
        return new RowSelection({
            enabled: this.enabled,
            type: this.type,
            mode: this.mode
        });
    }
    withEnabled(enabled) {
        this.enabled = enabled;
        return this;
    }
    withType(type) {
        this.type = type;
        return this;
    }
    withMode(mode) {
        this.mode = mode;
        return this;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LXNlbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9yb3ctc2VsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV4RSxNQUFNLENBQU4sSUFBWSxnQkFHWDtBQUhELFdBQVksZ0JBQWdCO0lBQzNCLHFEQUFHLENBQUE7SUFDSCwrREFBUSxDQUFBO0FBQ1QsQ0FBQyxFQUhXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFHM0I7QUFFRCxNQUFNLENBQU4sSUFBWSxnQkFHWDtBQUhELFdBQVksZ0JBQWdCO0lBQzNCLDJEQUFNLENBQUE7SUFDTiwrREFBUSxDQUFBO0FBQ1QsQ0FBQyxFQUhXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFHM0I7QUFFRCxNQUFNLE9BQU8sWUFBWTtJQVF4QixZQUFvQixNQUluQjtRQUNBLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDeEI7UUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztTQUN4QjtJQUNGLENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUVELGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7QUFFTSxvQkFBTyxHQUFHLE1BQU0sbUJBQW9CLFNBQVEsY0FBNEI7SUFROUU7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLFlBQVksQ0FBQztZQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2YsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFnQjtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBc0I7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQsUUFBUSxDQUFDLElBQXNCO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQUVELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZW5lcmljQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZ2VuZXJpYy1idWlsZGVyJztcblxuZXhwb3J0IGVudW0gUm93U2VsZWN0aW9uVHlwZSB7XG5cdFJPVyxcblx0Q0hFQ0tCT1hcbn1cblxuZXhwb3J0IGVudW0gUm93U2VsZWN0aW9uTW9kZSB7XG5cdFNJTkdMRSxcblx0TVVMVElQTEVcbn1cblxuZXhwb3J0IGNsYXNzIFJvd1NlbGVjdGlvbiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdHlwZTogUm93U2VsZWN0aW9uVHlwZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1vZGU6IFJvd1NlbGVjdGlvbk1vZGU7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3Rvcihjb25maWc6IHtcblx0XHRlbmFibGVkPzogYm9vbGVhbixcblx0XHRtb2RlPzogUm93U2VsZWN0aW9uTW9kZSxcblx0XHR0eXBlPzogUm93U2VsZWN0aW9uVHlwZVxuXHR9KSB7XG5cdFx0aWYgKGNvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IGNvbmZpZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcubW9kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLm1vZGUgPSBjb25maWcubW9kZTtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLnR5cGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy50eXBlID0gY29uZmlnLnR5cGU7XG5cdFx0fVxuXHR9XG5cblx0aXNNb2RlRGVmaW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5tb2RlICE9PSB1bmRlZmluZWQ7XG5cdH1cblxuXHRpc1R5cGVEZWZpbmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnR5cGUgIT09IHVuZGVmaW5lZDtcblx0fVxuXG5cdGlzRW5hYmxlZERlZmluZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZCAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRnZXRNb2RlKCk6IFJvd1NlbGVjdGlvbk1vZGUge1xuXHRcdHJldHVybiB0aGlzLm1vZGU7XG5cdH1cblxuXHRnZXRUeXBlKCk6IFJvd1NlbGVjdGlvblR5cGUge1xuXHRcdHJldHVybiB0aGlzLnR5cGU7XG5cdH1cblxuXHRzdGF0aWMgQnVpbGRlciA9IGNsYXNzIFJvd1NlbGVjdGlvbkJ1aWxkZXIgZXh0ZW5kcyBHZW5lcmljQnVpbGRlcjxSb3dTZWxlY3Rpb24+IHtcblxuXHRcdGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0XHR0eXBlOiBSb3dTZWxlY3Rpb25UeXBlO1xuXG5cdFx0bW9kZTogUm93U2VsZWN0aW9uTW9kZTtcblxuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0c3VwZXIoKTtcblx0XHR9XG5cblx0XHRidWlsZE9iamVjdCgpOiBSb3dTZWxlY3Rpb24ge1xuXHRcdFx0cmV0dXJuIG5ldyBSb3dTZWxlY3Rpb24oe1xuXHRcdFx0XHRlbmFibGVkOiB0aGlzLmVuYWJsZWQsXG5cdFx0XHRcdHR5cGU6IHRoaXMudHlwZSxcblx0XHRcdFx0bW9kZTogdGhpcy5tb2RlXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHR3aXRoRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUm93U2VsZWN0aW9uQnVpbGRlciB7XG5cdFx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0d2l0aFR5cGUodHlwZTogUm93U2VsZWN0aW9uVHlwZSk6IFJvd1NlbGVjdGlvbkJ1aWxkZXIge1xuXHRcdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHdpdGhNb2RlKG1vZGU6IFJvd1NlbGVjdGlvbk1vZGUpOiBSb3dTZWxlY3Rpb25CdWlsZGVyIHtcblx0XHRcdHRoaXMubW9kZSA9IG1vZGU7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0fTtcblxufVxuIl19