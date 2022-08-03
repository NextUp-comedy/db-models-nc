import {
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

interface IDatabase {
  url: string;
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
  revenue: number;
  reportId?: number;
  createdBy: number;
  updatedBy: number;
  tvodTicketsCount: number;
  tvodSeconds: number;
  title?: string;
}

interface IContent extends Model<
InferAttributes<IContent>, InferCreationAttributes<IContent>
> {
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
  primaryCategory:string;
}

interface IContentReport extends Model<
InferAttributes<IContentReport>, InferCreationAttributes<IContentReport>
> {
  id?: number;
  contentId: string;
  reportId?: number;
  watchedSeconds: number;
  revenue: number;
  createdBy: number;
  updatedBy: number;
  tvodTicketsCount: number;
  tvodSeconds: number;
  watches?: IWatchedStream[]
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

interface ISettings extends Model<
InferAttributes<ISettings>, InferCreationAttributes<ISettings>
> {
  id?: number;
  name: string;
  value: string;
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
  accPaidRevenue: number;
  freeToBePaidRevenue: number;
  createdBy: number;
  updatedBy: number;
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

export {
  IContent,
  IContentReport,
  IUserRole,
  ISettings,
  IUser,
  IWatches,
  IReport,
  IDatabase,
};