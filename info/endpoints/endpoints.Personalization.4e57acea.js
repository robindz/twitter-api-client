"use strict";
(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.Personalization"],
  {
    21721: (e, t, n) => {
      n.r(t), n.d(t, { default: () => a });
      const a = ({ apiClient: e, featureSwitches: t }) => ({
        fetchPreferences: (t, n) =>
          e.get("account/personalization/p13n_preferences", t, n),
        updatePreferences: (t, n) =>
          e.post(
            "account/personalization/p13n_preferences",
            t,
            {},
            { ...n, "content-type": "application/json" }
          ),
        fetchData: (t, n) => e.get("account/personalization/p13n_data", t, n),
        fetchTwitterInterests: (t, n) =>
          e.get("account/personalization/twitter_interests", t, n),
        fetchPartnerInterests: (t, n) =>
          e.get("account/personalization/partner_interests", t, n),
        createAudienceDownload: (t, n) =>
          e.post("account/personalization/email_advertiser_list", t, {}, n),
        createDataDownload: (t, n) =>
          e.post("account/personalization/email_your_data", t, {}, n),
        updateCookies: (t, n) =>
          e.get("account/personalization/set_optout_cookies", t, n),
        syncSettings: (t, n) =>
          e.post("account/personalization/sync_optout_settings", t, {}, n),
      });
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.Personalization.4e57acea.js.map
