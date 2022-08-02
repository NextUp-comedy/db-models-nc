import sequelize from './connections';
import { Settings, Content, ContentReport, Report, UserRole, User, Watches } from './models';
declare const ReportContentReportAssociation: import("sequelize/types").HasMany<import("../interfaces").IReport, import("../interfaces").IContentReport>;
declare const ContentReportWatchesAssociation: import("sequelize/types").HasMany<import("../interfaces").IContentReport, import("../interfaces").IWatches>;
export { sequelize, Settings, Content, ContentReport, Report, UserRole, User, Watches, ContentReportWatchesAssociation, ReportContentReportAssociation, };
