import Big from 'big.js';
import {
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

interface IDatabase {
  url: string;
  secretKey: string;
}

interface IBasicContent {
  type?: string;
  id: string;
  userId?: number;
  title: string;
  publishDate: number;
  permalink: string;
  nextUpAccRevenue: string;
  owedAccRevenue: string;
  launchDate?: string;
  advance?: number;
  feePaid?: number;
  filmingCosts?: number;
  paidToOwedAmount?: number;
  freeToBePaid?: number;
  createdBy: number;
  updatedBy: number;
  runtime: number;
}

interface IVLContent extends IBasicContent {
  primaryCategory: { title: string };
}

interface ISubscription {
  planIdentifier: string;
  offersApplied: [];
}

interface IPurchase {
  subscription: ISubscription;
}

interface IVLUser {
  email: string[];
  purchases: IPurchase[];
}

interface IWatchedStream {
  streamId: string;
  contentId: string;
  duration: number;
  content: IVLContent;
  user?: IVLUser;
}

interface IDbWatches extends Pick<IWatchedStream, 'streamId' | 'contentId' | 'duration'> {
  createdBy: number;
  updatedBy: number;
}

interface IAccumulatedWatchesDurationPerContent {
  contentId: string;
  watchedSeconds: number;
  watches: IDbWatches[];
  revenue: string | Big;
  reportId?: number;
  createdBy: number;
  updatedBy: number;
  tvodTicketsCount: number;
  tvodSeconds: number;
  title?: string;
  nextupRevenue?: string | Big | null;
  owedRevenue?: string | Big | null;
  beforeExpiryReportDaysPercentage?: string | Big | null;
  beforeExpRevenue?: string | Big | null;
  splittableBeforeExpRevenue?:string | Big | null;
  reimbursementBeforeExpRevenue?:string | Big | null;
  afterExpRevenue?:string | Big | null;

}

interface IContent extends Model<
InferAttributes<IContent>, InferCreationAttributes<IContent>
> {
  id: string;
  userId?: number | null;
  title: string;
  publishDate: number;
  permalink: string;
  nextUpAccRevenue: string;
  owedAccRevenue: string;
  launchDate?: string;
  advance?: string;
  feePaid?: string;
  filmingCosts?: string;
  paidToOwedAmount?: number;
  freeToBePaid?: number;
  createdBy: number;
  updatedBy: number;
  runtime: number;
  primaryCategory:string;
  recoveredCosts: string;
}

interface IContentReport extends Model<
InferAttributes<IContentReport>, InferCreationAttributes<IContentReport>
> {
  id?: number;
  contentId: string;
  reportId?: number;
  watchedSeconds: number;
  revenue: string;
  createdBy: number;
  updatedBy: number;
  tvodTicketsCount: number;
  tvodSeconds: number;
  watches?: IWatchedStream[];
  nextupRevenue: string | null;
  owedRevenue: string | null;
  beforeExpiryReportDaysPercentage: string | null;
  beforeExpRevenue: string | null;
  splittableBeforeExpRevenue:string | null;
  reimbursementBeforeExpRevenue:string | null;
  afterExpRevenue:string | null;
}

interface IReport extends Model<
InferAttributes<IReport>, InferCreationAttributes<IReport>
> {
  id?: number;
  watchTimeFrom: string;
  watchTimeTo: string;
  overallWatchedSeconds: number;
  totalRevenue: number;
  nextUpToOwedSplitPercentage: string;
  createdBy: number;
  updatedBy: number;
  contentReports?: IAccumulatedWatchesDurationPerContent[];
}

interface IUserRole extends Model<
InferAttributes<IUserRole>, InferCreationAttributes<IUserRole>
> {
  id?: number;
  name: string;
}

interface IVariables {
  regularVariables: {
    nextupToOwedSplitPercentage: string;
    systemActivationDate: string;
    fetchMaxCount: string;
    expiredAfterInYears: string;
    viewliftEmail: string;
    viewliftEndpoint: string;
    viewliftWatchesFetchLimit: string;
  };
  encryptedVariables: {
    viewliftPassword: string;
  };
}

interface IDashboardSettings {
  nextUpToOwedSplitPercentage: string;
  systemActivationDate: string;
  maxCount: number;
  expiredAfterInYears: number;
  email: string;
  viewliftEndpoint: string;
  limit: number;
  password: string;
}

interface ISettings extends Model<InferAttributes<ISettings>, InferCreationAttributes<ISettings>> {
  id?: number;
  name: string;
  value: IVariables;
}

interface IUser extends Model<
InferAttributes<IUser>, InferCreationAttributes<IUser>
> {
  id?: number;
  name: string;
  email: string;
  password: string;
  googleId?: string;
  userRoleId: number;
  userStatusId?: number;
  accPaidRevenue: number;
  freeToBePaidRevenue: number;
  image?: string;
  rejectionReason?: string;
  createdBy: number;
  updatedBy?: number;
}

interface IWatches extends Model<
InferAttributes<IWatches>, InferCreationAttributes<IWatches>
> {
  id?: number;
  streamId: string;
  duration: number;
  contentId: string;
  contentReportId: number;
  createdBy: number;
  updatedBy: number;
}

interface IUserStatus extends Model<
InferAttributes<IUserStatus>, InferCreationAttributes<IUserStatus>
> {
  id?: number;
  name: string;
}

interface ITransactions extends Model<
InferAttributes<ITransactions>, InferCreationAttributes<ITransactions>
> {
  id?: number;
  contentId: string;
  nextUpAccRevenue: number;
  owedAccRevenue: number;
  prevNextUpAccRevenue: number;
  prevOwedAccRevenue: number;
  recoveredCosts: number;
  prevRecoveredCosts: number;
  contentReportId : number;
  revenue: number;
  nextUpToOwedSplitPercentage: number;
}

export {
  IContent,
  IContentReport,
  IUserRole,
  ISettings,
  IUser,
  IWatches,
  IReport,
  IDatabase,
  IUserStatus,
  ITransactions,
  IVariables,
  IDashboardSettings,
};
