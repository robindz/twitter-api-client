(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.QuickPromote"],
  {
    5093: (e) => {
      e.exports = {
        queryId: "QEMLEzEMzoPNbeauKCCLbg",
        operationName: "SetDefault",
        operationType: "mutation",
        metadata: { featureSwitches: [] },
      };
    },
    35920: (e) => {
      e.exports = {
        queryId: "VaaLGwK5KNLoc7wsOmp4uw",
        operationName: "DeletePaymentMethod",
        operationType: "mutation",
        metadata: { featureSwitches: [] },
      };
    },
    58257: (e) => {
      e.exports = {
        queryId: "mPF_G9okpbZuLcD6mN8K9g",
        operationName: "PaymentMethods",
        operationType: "query",
        metadata: { featureSwitches: [] },
      };
    },
    1592: (e) => {
      e.exports = {
        queryId: "a8KxGfFQAmm3WxqemuqSRA",
        operationName: "AdAccounts",
        operationType: "query",
        metadata: { featureSwitches: [] },
      };
    },
    21436: (e) => {
      e.exports = {
        queryId: "1LYVUabJBYkPlUAWRabB3g",
        operationName: "AudienceEstimate",
        operationType: "query",
        metadata: { featureSwitches: [] },
      };
    },
    56628: (e) => {
      e.exports = {
        queryId: "mbK3oSQotwcJXyQIBE3uYw",
        operationName: "Budgets",
        operationType: "query",
        metadata: { featureSwitches: [] },
      };
    },
    84700: (e) => {
      e.exports = {
        queryId: "R1h43jnAl2bsDoUkgZb7NQ",
        operationName: "Coupons",
        operationType: "query",
        metadata: { featureSwitches: [] },
      };
    },
    74648: (e) => {
      e.exports = {
        queryId: "oDSoVgHhJxnd5IkckgPZdg",
        operationName: "CreateQuickPromotion",
        operationType: "mutation",
        metadata: { featureSwitches: [] },
      };
    },
    95713: (e) => {
      e.exports = {
        queryId: "LtpCXh66W-uXh7u7XSRA8Q",
        operationName: "QuickPromoteEligibility",
        operationType: "query",
        metadata: { featureSwitches: [] },
      };
    },
    54096: (e) => {
      e.exports = {
        queryId: "SOyGmNGaEXcvk15s5bqDrA",
        operationName: "EnrollCoupon",
        operationType: "mutation",
        metadata: { featureSwitches: [] },
      };
    },
    81019: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => x });
      o(6886), o(36728);
      var n = o(24797),
        a = o(17360),
        u = o(5093),
        i = o.n(u),
        l = o(35920),
        r = o.n(l),
        _ = o(58257),
        d = o.n(_),
        c = o(1592),
        p = o.n(c),
        s = o(21436),
        m = o.n(s),
        y = o(56628),
        v = o.n(y),
        g = o(84700),
        b = o.n(g),
        h = o(74648),
        w = o.n(h),
        f = o(95713),
        k = o.n(f),
        q = o(54096),
        C = o.n(q);
      const x = ({ apiClient: e, featureSwitches: t }) => ({
          getQuickPromoteEligibility: (t) =>
            e.graphQL(k(), t).then((e) => {
              var t;
              const o =
                null == (t = e.tweet_result_by_rest_id) ? void 0 : t.result;
              var n, a;
              return "Tweet" === (null == o ? void 0 : o.__typename)
                ? null == (n = o.quick_promote_eligibility)
                  ? void 0
                  : n.eligibility
                : "TweetWithVisibilityResults" ===
                  (null == o ? void 0 : o.__typename)
                ? null == (a = o.tweet.quick_promote_eligibility)
                  ? void 0
                  : a.eligibility
                : void 0;
            }),
          getCoupons: (t) =>
            e.graphQL(b(), t).then((e) => {
              var t, o, n;
              const a =
                  null == (t = e.viewer) || null == (o = t.user_results)
                    ? void 0
                    : o.result,
                u =
                  "User" === (null == a ? void 0 : a.__typename)
                    ? null == (n = a.professional)
                      ? void 0
                      : n.quick_promote_coupons_v2
                    : void 0,
                i = (function (e) {
                  var t, o, n, a;
                  const u =
                      null == (t = e.viewer) || null == (o = t.user_results)
                        ? void 0
                        : o.result,
                    i =
                      "User" === (null == u ? void 0 : u.__typename)
                        ? null == (n = u.professional)
                          ? void 0
                          : n.quick_promote_coupons_v2
                        : void 0;
                  let l;
                  if (null != i && i.eligible_coupon_v2)
                    switch (i.eligible_coupon_v2.__typename) {
                      case "QuickPromoteConditionalCoupon":
                        l = {
                          type: "ConditionalCoupon",
                          currency_code: i.eligible_coupon_v2.currency_code,
                          credit_amount: i.eligible_coupon_v2.credit_amount,
                          spend_amount: i.eligible_coupon_v2.spend_amount,
                        };
                        break;
                      case "QuickPromoteStandardCoupon":
                        l = {
                          type: "StandardCoupon",
                          currency_code: i.eligible_coupon_v2.currency_code,
                          total_amount: i.eligible_coupon_v2.total_amount,
                        };
                        break;
                      default:
                        i.eligible_coupon_v2.__typename;
                    }
                  else
                    null != i &&
                      null != (a = i.eligible_coupon) &&
                      a.total_amount &&
                      null != i &&
                      i.eligible_coupon.currency_code &&
                      (l = {
                        type: "StandardCoupon",
                        currency_code: i.eligible_coupon.currency_code,
                        total_amount: i.eligible_coupon.total_amount,
                      });
                  return l;
                })(e),
                l = (function (e) {
                  var t, o, n;
                  const a =
                      null == (t = e.viewer) || null == (o = t.user_results)
                        ? void 0
                        : o.result,
                    u =
                      "User" === (null == a ? void 0 : a.__typename)
                        ? null == (n = a.professional)
                          ? void 0
                          : n.quick_promote_coupons_v2
                        : void 0,
                    i =
                      (null == u ? void 0 : u.pending_coupons) &&
                      (null == u ? void 0 : u.pending_coupons[0]);
                  return (
                    i && {
                      type: "ConditionalCoupon",
                      credit_amount: i.credit_amount,
                      spend_amount: i.spend_amount,
                      currency_code: i.currency_code,
                    }
                  );
                })(e);
              null != i &&
                i.total_amount &&
                (i.total_amount = i.total_amount / 1e6),
                null != i &&
                  i.credit_amount &&
                  (i.credit_amount = i.credit_amount / 1e6),
                null != i &&
                  i.spend_amount &&
                  (i.spend_amount = i.spend_amount / 1e6),
                null != l &&
                  l.credit_amount &&
                  (l.credit_amount = l.credit_amount / 1e6),
                null != l &&
                  l.spend_amount &&
                  (l.spend_amount = l.spend_amount / 1e6),
                null != u &&
                  u.existing_balance &&
                  (u.existing_balance = u.existing_balance.map(
                    ({ currency_code: e, total_amount: t }) => ({
                      currency_code: e,
                      total_amount: t ? t / 1e6 : 0,
                    })
                  ));
              const r =
                null != u && u.experiment_end_timestamp
                  ? new Date(u.experiment_end_timestamp)
                  : void 0;
              return (
                u && {
                  eligible_coupon: i,
                  pending_coupon: l,
                  existing_balance: u.existing_balance,
                  eligible_coupon_experiment: u.eligible_coupon_experiment,
                  experiment_end_date: r,
                }
              );
            }),
          getBudgets: (t) =>
            e.graphQL(v(), t).then((e) => {
              var t;
              const o =
                null == (t = e.viewer)
                  ? void 0
                  : t.quick_promote_budget_by_country;
              return o
                ? {
                    budgets: o.values.map((e) => parseInt(e, 10) / 1e6),
                    currencyCode: o.currency_code,
                    defaultBudget: parseInt(o.default_budget, 10) / 1e6,
                  }
                : S;
            }),
          getAudienceEstimate: (t) =>
            e.graphQL(m(), t).then((e) => {
              var t;
              const o =
                null == (t = e.quick_promote_audience_estimation_v2)
                  ? void 0
                  : t.impressions;
              return o && o.low && o.high
                ? {
                    estimatedImpressions: {
                      low: parseInt(o.low, 10),
                      high: parseInt(o.high, 10),
                    },
                  }
                : { estimatedImpressions: void 0 };
            }),
          getPaymentMethods: (t) =>
            e.graphQL(d(), t).then((e) => {
              const t = e.payment_methods,
                o = ["Active", "New", "Invalid"],
                a = [];
              return (
                null == t ||
                  t.forEach((e) => {
                    "CreditCard" === e.payment_method_type &&
                      !(0, n.Z)(e.details) &&
                      e.details.card_status &&
                      o.includes(e.details.card_status) &&
                      a.push({
                        id: e.id,
                        cardStatus: e.details.is_expired
                          ? "Expired"
                          : "Active" === e.details.card_status
                          ? "Active"
                          : "Invalid",
                        lastFourDigits: e.details.last_four_digits,
                        fullName: e.details.full_name,
                        isDefault: e.is_default,
                        imgSrcUrl: e.details.CreditCardImgSrcUrl,
                      });
                  }),
                a
              );
            }),
          deletePaymentMethod: (t) => e.graphQL(r(), t),
          setDefaultPaymentMethod: (t) => e.graphQL(i(), t),
          createPromotion: (t) => e.graphQL(w(), t),
          enrollCoupon: (t) =>
            e.graphQL(C(), t).then((e) => {
              const t = e.quick_promote_enroll_coupons;
              return (
                null != t &&
                  t.available_balance &&
                  (t.available_balance = t.available_balance.map(
                    ({ currency_code: e, total_amount: t }) => ({
                      currency_code: e,
                      total_amount: t ? t / 1e6 : 0,
                    })
                  )),
                null != t &&
                  t.enrolled_coupon &&
                  t.enrolled_coupon.total_amount &&
                  (t.enrolled_coupon.total_amount =
                    t.enrolled_coupon.total_amount / 1e6),
                null != t &&
                  t.enrolled_coupon_v2 &&
                  t.enrolled_coupon_v2.spend_amount &&
                  (t.enrolled_coupon_v2.spend_amount =
                    t.enrolled_coupon_v2.spend_amount / 1e6),
                null != t &&
                  t.enrolled_coupon_v2 &&
                  t.enrolled_coupon_v2.credit_amount &&
                  (t.enrolled_coupon_v2.credit_amount =
                    t.enrolled_coupon_v2.credit_amount / 1e6),
                e
              );
            }),
          getAdAccounts: (t) =>
            e.graphQL(
              p(),
              t,
              (0, a.kj)(() => !1, "GQL AdAccounts: Failed to fetch ad accounts")
            ),
        }),
        S = {
          budgets: [50, 100, 250, 500, 1e3, 2500, 5e3],
          currencyCode: "USD",
          defaultBudget: 100,
        };
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.QuickPromote.f9840a2a.js.map
