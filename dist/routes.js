"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
var handlers = require("./handlers");
var RouteListItem = /** @class */ (function () {
    function RouteListItem(url, func) {
        this.url = url;
        this.func = func;
    }
    return RouteListItem;
}());
exports.RouteListItem = RouteListItem;
exports.listOfRoutes = [
    new RouteListItem('/ryzthn/LookupUser', handlers.LookupUserHandler),
    new RouteListItem('/ryzthn/SearchUsers', handlers.SearchUsersHandler),
    new RouteListItem('/ryzthn/CreateUser', handlers.CreateUserHandler),
    new RouteListItem('/ryzthn/UpdateUser', handlers.UpdateUserHandler),
    new RouteListItem('/ryzthn/SetUserContactAddress', handlers.SetUserContactAddressHandler),
    new RouteListItem('/ryzthn/SetUserAccess', handlers.SetUserAccessHandler),
    new RouteListItem('/ryzthn/SetUserLoginStatus', handlers.SetUserLoginStatusHandler),
    new RouteListItem('/ryzthn/ResetUserPassword', handlers.ResetUserPasswordHandler),
    new RouteListItem('/ryzthn/NukeHandle', handlers.NukeHandleHandler),
    new RouteListItem('/ryzthn/GetHandleHistory', handlers.GetHandleHistoryHandler),
    new RouteListItem('/ryzthn/SendUserEmailNotification', handlers.SendUserEmailNotificationHandler),
    new RouteListItem('/ryzthn/SearchAuditHistory', handlers.SearchAuditHistoryHandler),
    new RouteListItem('/ryzthn/GetAppConfig', handlers.GetAppConfigHandler),
    new RouteListItem('/ryzthn/GetGlobalConfig', handlers.GetGlobalConfigHandler),
    new RouteListItem('/ryzthn/SetGlobalConfig', handlers.SetGlobalConfigHandler),
    new RouteListItem('/ryzthn/GetMatchQueueConfig', handlers.GetMatchQueueConfigHandler),
    new RouteListItem('/ryzthn/SetMatchQueueConfig', handlers.SetMatchQueueConfigHandler),
    new RouteListItem('/ryzthn/GetMatchUserConfig', handlers.GetMatchUserConfigHandler),
    new RouteListItem('/ryzthn/SetMatchUserConfig', handlers.SetMatchUserConfigHandler),
    new RouteListItem('/ryzthn/GetLobbyConfig', handlers.GetLobbyConfigHandler),
    new RouteListItem('/ryzthn/SetLobbyConfig', handlers.SetLobbyConfigHandler),
    new RouteListItem('/ryzthn/ListFeatureDefinitions', handlers.ListFeatureDefinitionsHandler),
    new RouteListItem('/ryzthn/SetFeatureDefinition', handlers.SetFeatureDefinitionHandler),
    new RouteListItem('/ryzthn/DeleteFeatureDefinition', handlers.DeleteFeatureDefinitionHandler),
    new RouteListItem('/ryzthn/ListFeatureRules', handlers.ListFeatureRulesHandler),
    new RouteListItem('/ryzthn/GetActiveFeatures', handlers.GetActiveFeaturesHandler),
    new RouteListItem('/ryzthn/CreateFeatureRule', handlers.CreateFeatureRuleHandler),
    new RouteListItem('/ryzthn/UpdateFeatureRule', handlers.UpdateFeatureRuleHandler),
    new RouteListItem('/ryzthn/DeleteFeatureRule', handlers.DeleteFeatureRuleHandler),
    new RouteListItem('/ryzthn/GetMatchQueueUsers', handlers.GetMatchQueueUsersHandler),
    new RouteListItem('/ryzthn/GetLobbies', handlers.GetLobbiesHandler),
    new RouteListItem('/ryzthn/GetLobby', handlers.GetLobbyHandler),
    new RouteListItem('/ryzthn/GetActiveMatches', handlers.GetActiveMatchesHandler),
    new RouteListItem('/ryzthn/GetActiveMatch', handlers.GetActiveMatchHandler),
    new RouteListItem('/ryzthn/GetRecentMatches', handlers.GetRecentMatchesHandler),
    new RouteListItem('/ryzthn/GetMatchDetail', handlers.GetMatchDetailHandler),
    new RouteListItem('/ryzthn/GetPlayerDetail', handlers.GetPlayerDetailHandler),
    new RouteListItem('/ryzthn/ListDesyncs', handlers.ListDesyncsHandler),
    new RouteListItem('/ryzthn/ListCrashes', handlers.ListCrashesHandler),
    new RouteListItem('/ryzthn/ListCrashBuildIdentifiers', handlers.ListCrashBuildIdentifiersHandler),
    new RouteListItem('/ryzthn/ListCrashCollections', handlers.ListCrashCollectionsHandler),
    new RouteListItem('/ryzthn/SearchPurchaseOrders', handlers.SearchPurchaseOrdersHandler),
    new RouteListItem('/ryzthn/SyncPurchaseOrder', handlers.SyncPurchaseOrderHandler),
    new RouteListItem('/ryzthn/VoidPurchaseOrder', handlers.VoidPurchaseOrderHandler),
    new RouteListItem('/ryzthn/RefundPurchaseOrder', handlers.RefundPurchaseOrderHandler),
    new RouteListItem('/ryzthn/CountUsers', handlers.CountUsersHandler),
    new RouteListItem('/ryzthn/GetSessions', handlers.GetSessionsHandler),
    new RouteListItem('/ryzthn/GetCharacterUsage', handlers.GetCharacterUsageHandler),
    new RouteListItem('/ryzthn/CheckHandle', handlers.CheckHandleHandler),
    new RouteListItem('/ryzthn/RegisterUser', handlers.RegisterUserHandler),
    new RouteListItem('/ryzthn/ValidateUser', handlers.ValidateUserHandler),
    new RouteListItem('/ryzthn/GetSecretQuestion', handlers.GetSecretQuestionHandler),
    new RouteListItem('/ryzthn/SendPasswordResetEmail', handlers.SendPasswordResetEmailHandler),
    new RouteListItem('/ryzthn/VerifyResetPasswordCode', handlers.VerifyResetPasswordCodeHandler),
    new RouteListItem('/ryzthn/ResetPassword', handlers.ResetPasswordHandler),
    new RouteListItem('/ryzthn/GetUserInfo', handlers.GetUserInfoHandler),
    new RouteListItem('/ryzthn/ResendValidationEmail', handlers.ResendValidationEmailHandler),
    new RouteListItem('/ryzthn/SetLocale', handlers.SetLocaleHandler),
    new RouteListItem('/ryzthn/SetContactAddress', handlers.SetContactAddressHandler),
    new RouteListItem('/ryzthn/GetUserPrefs', handlers.GetUserPrefsHandler),
    new RouteListItem('/ryzthn/SetUserPrefs', handlers.SetUserPrefsHandler),
    new RouteListItem('/ryzthn/ChangePassword', handlers.ChangePasswordHandler),
    new RouteListItem('/ryzthn/ChangeEmailAddress', handlers.ChangeEmailAddressHandler),
    new RouteListItem('/ryzthn/RedeemAccessCode', handlers.RedeemAccessCodeHandler),
    new RouteListItem('/ryzthn/CrashReport', handlers.CrashReportHandler),
    new RouteListItem('/ryzthn/EventPing', handlers.EventPingHandler),
    new RouteListItem('/ryzthn/CreateLobby', handlers.CreateLobbyHandler),
    new RouteListItem('/ryzthn/GetLobbyJoinCode', handlers.GetLobbyJoinCodeHandler),
    new RouteListItem('/ryzthn/JoinLobbyByCode', handlers.JoinLobbyByCodeHandler),
    new RouteListItem('/ryzthn/LeaveLobby', handlers.LeaveLobbyHandler),
    new RouteListItem('/ryzthn/LobbySetReady', handlers.LobbySetReadyHandler),
    new RouteListItem('/ryzthn/LobbySetOwner', handlers.LobbySetOwnerHandler),
    new RouteListItem('/ryzthn/LobbySetGameOptions', handlers.LobbySetGameOptionsHandler),
    new RouteListItem('/ryzthn/LobbyBanUser', handlers.LobbyBanUserHandler),
    new RouteListItem('/ryzthn/LobbyRemoveUser', handlers.LobbyRemoveUserHandler),
    new RouteListItem('/ryzthn/GetGameProfile', handlers.GetGameProfileHandler),
    new RouteListItem('/ryzthn/PingTest', handlers.PingTestHandler),
    new RouteListItem('/ryzthn/GetMatch', handlers.GetMatchHandler),
    new RouteListItem('/ryzthn/ResumeGetMatch', handlers.ResumeGetMatchHandler),
    new RouteListItem('/ryzthn/CancelGetMatch', handlers.CancelGetMatchHandler),
    new RouteListItem('/ryzthn/ResetGame', handlers.ResetGameHandler),
    new RouteListItem('/ryzthn/GetGameReplayRecord', handlers.GetGameReplayRecordHandler),
    new RouteListItem('/ryzthn/DesyncReport', handlers.DesyncReportHandler),
    new RouteListItem('/ryzthn/UpdatePlayerPreferences', handlers.UpdatePlayerPreferencesHandler),
    new RouteListItem('/ryzthn/GetPlayerStats', handlers.GetPlayerStatsHandler),
    new RouteListItem('/ryzthn/GetRecentGames', handlers.GetRecentGamesHandler),
    new RouteListItem('/ryzthn/Login', handlers.LoginHandler),
    new RouteListItem('/ryzthn/GetGameSessionTicket', handlers.GetGameSessionTicketHandler),
    new RouteListItem('/ryzthn/RedeemGameSessionTicket', handlers.RedeemGameSessionTicketHandler),
    new RouteListItem('/ryzthn/Logout', handlers.LogoutHandler),
    new RouteListItem('/ryzthn/GetStoredPaymentMethods', handlers.GetStoredPaymentMethodsHandler),
    new RouteListItem('/ryzthn/CreateStoredPaymentMethod', handlers.CreateStoredPaymentMethodHandler),
    new RouteListItem('/ryzthn/UpdateStoredPaymentMethod', handlers.UpdateStoredPaymentMethodHandler),
    new RouteListItem('/ryzthn/SetDefaultStoredPaymentMethod', handlers.SetDefaultStoredPaymentMethodHandler),
    new RouteListItem('/ryzthn/RemoveStoredPaymentMethod', handlers.RemoveStoredPaymentMethodHandler),
    new RouteListItem('/ryzthn/SubmitPurchaseOrder', handlers.SubmitPurchaseOrderHandler),
    new RouteListItem('/ryzthn/GetPurchaseOrder', handlers.GetPurchaseOrderHandler),
    new RouteListItem('/ryzthn/GetAccountOrderHistory', handlers.GetAccountOrderHistoryHandler),
    new RouteListItem('/ryzthn/GetAccountBalanceHistory', handlers.GetAccountBalanceHistoryHandler),
    new RouteListItem('/ryzthn/GetAccountBalance', handlers.GetAccountBalanceHandler),
    new RouteListItem('/ryzthn/GetUserCount', handlers.GetUserCountHandler),
    new RouteListItem('/ryzthn/GetUsersInRankedCount', handlers.GetUsersInRankedCountHandler),
];
function request(url, callback) {
    node_fetch_1.default("http://localhost:8000" + url)
        .then(function (res) { return callback(res); })
        .catch(function (e) {
        console.error("Could not complete the request. " + e);
    });
}
exports.request = request;
