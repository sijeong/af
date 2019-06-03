import { createFeatureSelector } from "@ngrx/store";
import { State, ReportState, FEATURE_NAME } from "./reportState";

export const selectReports = createFeatureSelector<State, ReportState>(FEATURE_NAME);
