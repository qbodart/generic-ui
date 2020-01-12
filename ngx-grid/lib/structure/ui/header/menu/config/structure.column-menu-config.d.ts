import { ColumnMenuConfig } from '../../../../ui-api/structure/column-menu-config';
export declare class StructureColumnMenuConfig {
    private enabled;
    private sort;
    private filter;
    private columns;
    static default(): StructureColumnMenuConfig;
    static fromConfig(config: ColumnMenuConfig): StructureColumnMenuConfig;
    private static readonly MAIN;
    private static readonly FILTER;
    private static readonly COLUMNS;
    constructor(enabled?: boolean, sort?: boolean, filter?: boolean, columns?: boolean);
    isEnabled(): boolean;
    isMainEnabled(): boolean;
    isSort(): boolean;
    isFilter(): boolean;
    isColumns(): boolean;
    getMenus(): Array<string>;
    getActiveMenu(): string;
    getMainMenu(): string;
    getFilterMenu(): string;
    getColumnMenu(): string;
}
