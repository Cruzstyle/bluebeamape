"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [65682], {
        46323: function(e, l, n) {
            n.d(l, {
                Z: function() {
                    return d
                }
            });
            var a = n(24246),
                t = (n(27378), n(4402)),
                i = n(59533),
                r = n(77775),
                o = n(6723),
                s = n(23176),
                c = n(24736),
                u = n(70884),
                d = function(e) {
                    var l, d, m, g, p, y = e.dataKey,
                        f = e.showTwitterMetadata,
                        k = void 0 !== f && f,
                        h = (0, o.q)("collections"),
                        v = (0, r.t)().origin,
                        F = (0, t.useFragment)(n(80687), null !== y && void 0 !== y ? y : null),
                        x = F ? "".concat(c.N("ogImagesPreviewUrl"), "/v1/collections/").concat(F.slug) : u.YS,
                        b = h("page.collectionSuffix", "Collection"),
                        T = {
                            title: (null === F || void 0 === F ? void 0 : F.name) ? "".concat(F.name, " - ").concat(b) : b,
                            image: x,
                            imageAlt: null !== (m = null === F || void 0 === F ? void 0 : F.name) && void 0 !== m ? m : "",
                            author: null !== (p = null !== (g = null === F || void 0 === F || null === (l = F.owner) || void 0 === l ? void 0 : l.displayName) && void 0 !== g ? g : null === F || void 0 === F || null === (d = F.owner) || void 0 === d ? void 0 : d.address) && void 0 !== p ? p : "",
                            url: F ? "".concat(v).concat((0, s.vg)(F)) : ""
                        };
                    return (0, a.jsx)(i.k, {
                        description: (null === F || void 0 === F ? void 0 : F.description) || "",
                        image: x,
                        title: (0, i.t)((null === F || void 0 === F ? void 0 : F.name) ? "".concat(F.name, " - ").concat(b) : b),
                        twitterMetadata: k ? T : void 0
                    })
                }
        },
        6063: function(e, l, n) {
            n.d(l, {
                r: function() {
                    return ke
                }
            });
            var a = n(24246),
                t = n(27378),
                i = n(4402),
                r = n(82167),
                o = n(19989),
                s = n(47892),
                c = n(96150),
                u = n(316),
                d = n(48599),
                m = n(15735),
                g = n(48257);

            function p() {
                var e = (0, o.Z)(["\n  width: 100%;\n"]);
                return p = function() {
                    return e
                }, e
            }
            var y = function(e) {
                    var l = e.heading,
                        n = e.icon,
                        t = e.isClosable,
                        i = void 0 === t || t,
                        r = e.onClose,
                        o = e.text;
                    return (0, a.jsxs)(f, {
                        padding: {
                            _: "16px 16px 24px 12px",
                            lg: "20px 64px"
                        },
                        children: [(0, a.jsxs)(c.k, {
                            justifyContent: "center",
                            width: "100%",
                            children: [n && (0, a.jsx)(g.J, {
                                color: "blue",
                                size: 40,
                                value: n
                            }), (0, a.jsxs)(c.k, {
                                flexDirection: "column",
                                marginLeft: {
                                    _: "10px",
                                    lg: "24px"
                                },
                                maxWidth: "600px",
                                children: [(0, a.jsx)(u.xv.Body, {
                                    marginBottom: "4px",
                                    size: "medium",
                                    weight: "semibold",
                                    children: l
                                }), (0, a.jsx)(u.xv.Body, {
                                    size: "small",
                                    weight: "regular",
                                    children: o
                                })]
                            })]
                        }), i && (0, a.jsx)(c.k, {
                            alignItems: "flex-start",
                            children: (0, a.jsx)(d.k, {
                                onClick: function() {
                                    (0, m.O)({
                                        text: o || ""
                                    }), null === r || void 0 === r || r()
                                },
                                children: (0, a.jsx)(g.J, {
                                    size: 24,
                                    value: "close"
                                })
                            })
                        })]
                    })
                },
                f = (0, s.ZP)(c.k).attrs({
                    role: "banner"
                }).withConfig({
                    componentId: "sc-cf45b5d6-0"
                })(p()),
                k = n(16611),
                h = n(6222),
                v = n(73268),
                F = n(6723),
                x = n(59809),
                b = n(87291),
                T = n(66079),
                K = function(e) {
                    var l = e.isEditable,
                        r = e.isMintable,
                        o = e.data,
                        c = e.slug,
                        u = (0, F.q)("phoenix"),
                        d = (0, s.Fg)(),
                        m = (0, v.Jk)(),
                        g = (0, i.useFragment)(n(1934), o),
                        p = g ? (0, x.v$)(g.assetContracts) : null,
                        y = 1 === (null === p || void 0 === p ? void 0 : p.length) ? p[0] : void 0,
                        f = g || {},
                        K = f.discordUrl,
                        S = f.instagramUsername,
                        C = f.mediumUsername,
                        w = f.twitterUsername,
                        j = f.telegramUrl,
                        L = f.externalUrl,
                        I = f.connectedTwitterUsername,
                        O = "light" === d.type ? "charcoal" : "fog",
                        D = (0, t.useMemo)((function() {
                            var e = [{
                                url: L,
                                icon: (0, b.Q)({
                                    name: "website",
                                    fill: O
                                }),
                                tooltip: "Website"
                            }, {
                                url: K,
                                icon: (0, b.Q)({
                                    name: "discord",
                                    fill: O
                                }),
                                tooltip: "Discord"
                            }, {
                                url: C && "https://www.medium.com/@".concat(C),
                                icon: (0, b.Q)({
                                    name: "medium",
                                    fill: O
                                }),
                                tooltip: "Medium"
                            }, {
                                url: j,
                                icon: (0, b.Q)({
                                    name: "telegram",
                                    fill: O
                                }),
                                tooltip: "Telegram"
                            }, {
                                url: S && "https://www.instagram.com/".concat((0, T.oV)(S)),
                                icon: (0, b.Q)({
                                    name: "instagram",
                                    fill: O
                                }),
                                tooltip: "Instagram"
                            }];
                            if (y) {
                                var l = y.chainData.blockExplorer.identifier;
                                "POLYGONSCAN" === l && (l = "POLYGONSCAN_FILLED"), e.unshift({
                                    url: y.blockExplorerLink,
                                    icon: (0, b.Q)({
                                        name: l,
                                        fill: O
                                    }),
                                    tooltip: u("actionBar.viewOn", "View on {{blockExplorer}}", {
                                        blockExplorer: y.chainData.blockExplorer.name
                                    })
                                })
                            }
                            return I ? e.push({
                                url: I && "https://www.twitter.com/".concat(I),
                                icon: (0, b.Q)({
                                    name: "twitter",
                                    fill: O
                                }),
                                tooltip: (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        children: "Twitter"
                                    }), (0, a.jsx)(k.WX, {
                                        as: "span",
                                        variant: "small",
                                        children: m
                                    })]
                                })
                            }) : w && e.push({
                                url: w && "https://www.twitter.com/".concat(w),
                                icon: (0, b.Q)({
                                    name: "twitter",
                                    fill: O
                                }),
                                tooltip: "Twitter"
                            }), e.filter((function(e) {
                                return !!e.url
                            }))
                        }), [y, L, w, I, S, j, C, K, O, u, m]);
                    if (!g || !c) return null;
                    return (0, a.jsx)(h.I, {
                        collectionUrlDataKey: g,
                        collectionWatchlistDataKey: g,
                        isEditable: l,
                        isMintable: r,
                        relayId: g.relayId,
                        slug: c,
                        socialData: D,
                        toggleMoreDropdown: function() {
                            return null
                        },
                        variant: "collection"
                    })
                },
                S = n(85034),
                C = n(70169),
                w = n(3204),
                j = n(41948),
                L = n(24572),
                I = n(22949),
                O = n(53585),
                D = n(31893),
                U = n(72363),
                E = n(10412),
                P = n(11652);

            function _() {
                var e = (0, o.Z)(["\n  font-weight: 600;\n"]);
                return _ = function() {
                    return e
                }, e
            }
            var V = function(e) {
                    var l = e.dataKey,
                        t = (0, F.q)("collections"),
                        r = (0, i.useFragment)(n(50552), l),
                        o = r.createdDate,
                        s = r.statsV2,
                        c = r.totalCreatorFeeBasisPoints,
                        d = r.defaultChain,
                        m = new Date(o),
                        g = t("collections.descriptionMetadata.items.default", "{{itemLabel}} {{itemCount}}", {
                            itemLabel: t("collections.descriptionMetadata.items.count", {
                                0: "Items",
                                one: "Item",
                                other: "Items"
                            }, {
                                count: s.totalSupply
                            }),
                            itemCount: (0, a.jsx)(Q, {
                                children: (0, P.jf)(s.totalSupply)
                            })
                        }),
                        p = t("collections.descriptionMetadata.created", "Created {{createdDate}}", {
                            createdDate: (0, a.jsx)(Q, {
                                children: (0, L.Z)(m, I.J3)
                            })
                        }),
                        y = t("collections.descriptionMetadata.creatorFee", "Creator fee {{creatorFeePercentage}}", {
                            creatorFeePercentage: (0, a.jsxs)(Q, {
                                children: [c / 100, "%"]
                            })
                        }),
                        f = t("collections.descriptionMetadata.chain", "Chain {{chainName}}", {
                            chainName: (0, a.jsx)(Q, {
                                children: d.displayName
                            })
                        }),
                        k = (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)(U.pU, {
                                lessThan: "sm",
                                children: [(0, a.jsxs)(O.g, {
                                    children: [(0, a.jsx)(O.g, {
                                        as: "span",
                                        "data-testid": "collection-description-metadata-items",
                                        whiteSpace: "pre",
                                        children: g
                                    }), "\xa0\xa0\xb7\xa0", " ", (0, a.jsx)(O.g, {
                                        as: "span",
                                        "data-testid": "collection-description-metadata-created-date",
                                        whiteSpace: "pre",
                                        children: p
                                    })]
                                }), (0, a.jsxs)(O.g, {
                                    children: [!(0, E.mc)(d.identifier) && (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(O.g, {
                                            as: "span",
                                            "data-testid": "collection-description-metadata-creator-fee",
                                            whiteSpace: "pre",
                                            children: y
                                        }), "\xa0\xa0\xb7\xa0", " "]
                                    }), (0, a.jsx)(a.Fragment, {
                                        children: (0, a.jsx)(D.O, {
                                            as: "span",
                                            "data-testid": "collection-description-metadata-chain",
                                            whiteSpace: "pre",
                                            children: f
                                        })
                                    })]
                                })]
                            }), (0, a.jsxs)(U.pU, {
                                greaterThanOrEqual: "sm",
                                children: [(0, a.jsx)(O.g, {
                                    as: "span",
                                    "data-testid": "collection-description-metadata-items",
                                    whiteSpace: "pre",
                                    children: g
                                }), "\xa0\xa0\xb7\xa0", " ", (0, a.jsx)(O.g, {
                                    as: "span",
                                    "data-testid": "collection-description-metadata-created-date",
                                    whiteSpace: "pre",
                                    children: p
                                }), !(0, E.mc)(d.identifier) && (0, a.jsxs)(a.Fragment, {
                                    children: ["\xa0\xa0\xb7\xa0", " ", (0, a.jsx)(O.g, {
                                        as: "span",
                                        "data-testid": "collection-description-metadata-creator-fee",
                                        whiteSpace: "pre",
                                        children: y
                                    })]
                                }), (0, a.jsxs)(a.Fragment, {
                                    children: ["\xa0\xa0\xb7\xa0", " ", (0, a.jsx)(D.O, {
                                        as: "span",
                                        "data-testid": "collection-description-metadata-chain",
                                        whiteSpace: "pre",
                                        children: f
                                    })]
                                })]
                            })]
                        });
                    return (0, a.jsxs)(O.g, {
                        marginY: "12px",
                        children: [(0, a.jsx)(U.pU, {
                            greaterThanOrEqual: "sm",
                            children: (0, a.jsx)(u.xv.Body, {
                                color: "text.body",
                                size: "medium",
                                children: k
                            })
                        }), (0, a.jsx)(U.pU, {
                            lessThan: "sm",
                            children: (0, a.jsx)(u.xv.Body, {
                                color: "text.body",
                                size: "small",
                                children: k
                            })
                        })]
                    })
                },
                Q = (0, s.ZP)(O.g).attrs({
                    as: "span"
                }).withConfig({
                    componentId: "sc-8dad36d5-0"
                })(_()),
                A = n(72686),
                Z = n(40294),
                N = n(30079),
                B = n(89191),
                q = n(23176),
                M = n(78439),
                z = n(70884),
                W = function() {
                    return (0, a.jsxs)(c.k, {
                        flexDirection: "column",
                        children: [(0, a.jsx)(O.g, {
                            marginTop: "8px",
                            children: (0, a.jsx)(A.O.Line, {
                                height: "36px",
                                width: "350px"
                            })
                        }), (0, a.jsx)(U.pU, {
                            greaterThanOrEqual: "sm",
                            children: (0, a.jsx)(O.g, {
                                marginTop: "8px",
                                children: (0, a.jsx)(A.O.Line, {
                                    height: "51px",
                                    width: "350px"
                                })
                            })
                        }), (0, a.jsxs)(U.pU, {
                            lessThan: "sm",
                            children: [(0, a.jsx)(O.g, {
                                marginTop: "8px",
                                children: (0, a.jsx)(A.O.Line, {
                                    height: "51px",
                                    width: "350px"
                                })
                            }), (0, a.jsx)(O.g, {
                                marginTop: "8px",
                                children: (0, a.jsx)(A.O.Line, {
                                    height: "51px",
                                    width: "350px"
                                })
                            })]
                        })]
                    })
                },
                G = function(e) {
                    var l = e.dataKey,
                        t = (0, N.t)(),
                        r = (0, i.useFragment)(n(63438), l);
                    return r && t ? (0, a.jsx)(R, {
                        data: r,
                        slug: r.slug
                    }) : (0, a.jsx)(W, {})
                },
                R = function(e) {
                    var l, i = e.data,
                        r = e.slug,
                        o = (0, t.useState)(),
                        s = o[0],
                        c = o[1];
                    return (0, B.Z)(n(10566), {
                        collection: r
                    }, (function(e) {
                        return c(e)
                    }), {
                        delay: 5e3,
                        skipOnHidden: !0
                    }), (0, a.jsx)($, {
                        data: i,
                        live: null !== (l = null === s || void 0 === s ? void 0 : s.collection) && void 0 !== l ? l : null
                    })
                },
                Y = function(e, l, n) {
                    e !== l && setTimeout((function() {
                        return n(l)
                    }), 3e3)
                },
                $ = function(e) {
                    var l = e.data,
                        r = e.live,
                        o = (0, F.q)("phoenix"),
                        s = (0, i.useFragment)(n(12792), l),
                        c = (0, i.useFragment)(n(51135), r),
                        u = (0, t.useState)(null),
                        d = u[0],
                        m = u[1],
                        g = (0, t.useState)(null),
                        p = g[0],
                        y = g[1],
                        f = (0, t.useState)(null),
                        k = f[0],
                        h = f[1],
                        v = (0, j.Z)(d),
                        x = (0, j.Z)(p),
                        b = (0, j.Z)(k);
                    if (!s) return (0, a.jsx)(W, {});
                    var T = s.description,
                        K = s.name,
                        L = s.isCollectionOffersEnabled,
                        I = (0, q.Az)(null !== c && void 0 !== c ? c : s),
                        D = I.floor,
                        U = I.floorSymbol,
                        E = I.volume,
                        _ = I.volumeSymbol,
                        Q = I.offer,
                        A = I.offerSymbol,
                        N = I.listedCount,
                        B = I.listedPercentage,
                        G = I.uniqueOwnersCount,
                        R = I.uniqueOwnersPercentage,
                        $ = I.totalVolume;
                    Y(d, D, m), Y(p, Q, y), Y(k, E, h);
                    var J = M.Z.getQueryParams(),
                        H = M.Z.stringifyQueryParams({
                            search: (0, C.Z)((0, S.Z)({}, J.search), {
                                sortAscending: !0,
                                sortBy: "UNIT_PRICE",
                                toggles: ["BUY_NOW"]
                            })
                        }),
                        X = M.Z.stringifyQueryParams({
                            search: {
                                eventTypes: ["AUCTION_CREATED"]
                            }
                        }),
                        ee = M.Z.stringifyQueryParams({
                            search: {
                                eventTypes: ["COLLECTION_OFFER"]
                            }
                        }),
                        le = (0, q.vg)(s),
                        ne = "".concat($, " ").concat(_),
                        ae = {
                            text: null !== T && void 0 !== T ? T : o("collectionInfo.welcome", "Welcome to the home of {{name}} on OpenSea. Discover the best items in this collection.", {
                                name: K
                            }),
                            mobileLines: 1,
                            desktopLines: 1,
                            details: [{
                                label: o("collectionInfo.details.totalVolume", "total volume"),
                                prevNumber: b,
                                number: E,
                                symbol: _,
                                tooltip: ne,
                                url: "".concat(le, "/activity"),
                                testId: "collection-stats-volume"
                            }, {
                                label: o("collectionInfo.details.floorPrice", "floor price"),
                                prevNumber: v,
                                number: D,
                                symbol: D === z.Zx ? null : U,
                                url: "".concat(le).concat(H),
                                testId: "collection-stats-floor-price"
                            }].concat((0, w.Z)(L ? [{
                                label: o("collectionInfo.details.bestOffer", "best offer"),
                                prevNumber: x,
                                number: Q,
                                symbol: Q === z.Zx ? null : A,
                                url: "".concat((0, q.vg)(s), "/activity").concat(ee),
                                testId: "collection-stats-best-offer"
                            }] : []), [{
                                label: o("collectionInfo.details.listed", "listed"),
                                number: B,
                                tooltip: o("collectionInfo.details.listedCount", {
                                    0: "{{displayCount}} listed",
                                    one: "{{displayCount}} listed",
                                    other: "{{displayCount}} listed"
                                }, {
                                    count: N,
                                    displayCount: (0, P.jf)(N)
                                }, {
                                    forceString: !0
                                }),
                                url: "".concat(le, "/activity").concat(X),
                                testId: "collection-stats-listed"
                            }, {
                                label: o("collectionInfo.details.ownersCount", {
                                    0: "owners",
                                    one: "owner",
                                    other: "owners"
                                }, {
                                    count: G
                                }, {
                                    forceString: !0
                                }),
                                number: (0, P.jf)(G),
                                testId: "collection-stats-owners"
                            }, {
                                label: o("collectionInfo.details.uniqueOwners", "unique owners"),
                                number: R,
                                testId: "collection-stats-unique-owners"
                            }])
                        };
                    return (0, a.jsxs)(O.g, {
                        children: [(0, a.jsx)(V, {
                            dataKey: s
                        }), (0, a.jsx)(Z.t, (0, S.Z)({}, ae))]
                    })
                },
                J = n(69783),
                H = n(20225),
                X = n(41313),
                ee = n(40869);

            function le() {
                var e = (0, o.Z)(["\n  // required to override tippy styles\n  &&& {\n    color: ", ";\n  }\n"]);
                return le = function() {
                    return e
                }, e
            }
            var ne = function(e) {
                    var l = e.data,
                        r = (0, F.q)("phoenix"),
                        o = (0, H.Fg)().theme,
                        s = (0, v.Jk)(),
                        c = (0, i.useFragment)(n(79102), l || null),
                        u = c ? (0, x.v$)(c.assetContracts) : null,
                        d = u && 1 === u.length ? u[0] : void 0,
                        m = c || {},
                        g = m.discordUrl,
                        p = m.instagramUsername,
                        y = m.mediumUsername,
                        f = m.twitterUsername,
                        k = m.telegramUrl,
                        h = m.externalUrl,
                        K = m.connectedDiscordGuildId,
                        S = m.connectedTwitterUsername,
                        C = m.connectedInstagramUsername,
                        w = "light" === o ? "charcoal" : "fog",
                        j = (0, t.useMemo)((function() {
                            var e = [{
                                url: h,
                                icon: (0, b.Q)({
                                    name: "website",
                                    fill: w
                                }),
                                tooltip: r("social.tooltip.website", "Website")
                            }, K ? {
                                url: g,
                                icon: (0, b.Q)({
                                    name: "discord",
                                    fill: w
                                }),
                                tooltip: (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        children: "Discord"
                                    }), K && (0, a.jsx)(ae, {
                                        size: "small",
                                        children: s
                                    })]
                                })
                            } : {
                                url: g,
                                icon: (0, b.Q)({
                                    name: "discord",
                                    fill: w
                                }),
                                tooltip: "Discord"
                            }, {
                                url: y && "https://www.medium.com/@".concat(y),
                                icon: (0, b.Q)({
                                    name: "medium",
                                    fill: w
                                }),
                                tooltip: "Medium"
                            }, {
                                url: k,
                                icon: (0, b.Q)({
                                    name: "telegram",
                                    fill: w
                                }),
                                tooltip: "Telegram"
                            }];
                            if (d) {
                                var l = d.chainData.blockExplorer.identifier;
                                "POLYGONSCAN" === l && (l = "POLYGONSCAN_FILLED"), e.unshift({
                                    url: d.blockExplorerLink,
                                    icon: (0, b.Q)({
                                        name: l,
                                        fill: w
                                    }),
                                    tooltip: (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)("div", {
                                            children: r("socialBar.viewOn", "View on {{blockExplorer}}", {
                                                blockExplorer: d.chainData.blockExplorer.name
                                            })
                                        }), (0, a.jsx)(ae, {
                                            size: "small",
                                            children: (0, ee.FP)(d.address)
                                        })]
                                    })
                                })
                            }
                            return C ? e.push({
                                url: C && "https://www.instagram.com/".concat((0, T.oV)(C)),
                                icon: (0, b.Q)({
                                    name: "instagram",
                                    fill: w
                                }),
                                tooltip: (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        children: "Instagram"
                                    }), C && (0, a.jsx)(ae, {
                                        size: "small",
                                        children: s
                                    })]
                                })
                            }) : p && e.push({
                                url: p && "https://www.instagram.com/".concat((0, T.oV)(p)),
                                icon: (0, b.Q)({
                                    name: "instagram",
                                    fill: w
                                }),
                                tooltip: "Instagram"
                            }), S ? e.push({
                                url: S && "https://www.twitter.com/".concat(S),
                                icon: (0, b.Q)({
                                    name: "twitter",
                                    fill: w
                                }),
                                tooltip: (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        children: "Twitter"
                                    }), S && (0, a.jsx)(ae, {
                                        size: "small",
                                        children: s
                                    })]
                                })
                            }) : f && e.push({
                                url: f && "https://www.twitter.com/".concat(f),
                                icon: (0, b.Q)({
                                    name: "twitter",
                                    fill: w
                                }),
                                tooltip: "Twitter"
                            }), e.filter((function(e) {
                                return !!e.url
                            }))
                        }), [d, h, f, S, C, K, p, k, y, g, w, r, s]);
                    return c ? 0 === j.length ? (0, a.jsx)(O.g, {
                        marginTop: {
                            _: "-20px",
                            sm: "-24px"
                        }
                    }) : (0, a.jsx)(X.B, {
                        items: j
                    }) : (0, a.jsx)(A.O.Row, {
                        marginLeft: "12px",
                        children: (0, a.jsx)(A.O.Line, {
                            height: "44px",
                            width: "200px"
                        })
                    })
                },
                ae = (0, s.ZP)(u.xv.Body).withConfig({
                    componentId: "sc-c0157054-0"
                })(le(), (function(e) {
                    return e.theme.colors.text.subtle
                })),
                te = n(75110),
                ie = n(41326),
                re = n(50301),
                oe = n(83921),
                se = n(17645),
                ce = n(87481),
                ue = n(88747),
                de = n(47366),
                me = n(83989),
                ge = n(22548),
                pe = n(77775),
                ye = n(17372);

            function fe(e) {
                var l = e.dataKey,
                    t = e.slug,
                    r = e.currentTab,
                    o = e.isLoading,
                    s = (0, i.useFragment)(n(46865), l),
                    c = function(e) {
                        var l = (0, F.q)("collections"),
                            n = (0, pe.t)();
                        return [{
                            id: void 0,
                            label: l("collectionTab.label.items", "Items")
                        }, {
                            id: "analytics",
                            label: l("collectionTab.label.analytics", "Analytics"),
                            path: "/analytics".concat(void 0 === e ? "?".concat(n.queryParamsString) : "")
                        }, {
                            id: "activity",
                            label: l("collectionTab.label.activity", "Activity"),
                            path: "/activity"
                        }]
                    }(r),
                    u = (0, ye.H)(s) ? (0, w.Z)(c) : c.filter((function(e) {
                        return "analytics" !== e.id
                    }));
                return (0, a.jsx)(me.t, {
                    alignItems: "center",
                    children: (0, a.jsx)(ge.n, {
                        baseUrl: "/collection/".concat(t),
                        currentTab: r,
                        isLoading: o,
                        tabs: u
                    })
                })
            }
            var ke = function(e) {
                var l, o = e.dataKey,
                    s = e.tab,
                    c = e.children,
                    u = (0, F.q)("collections"),
                    d = (0, ue.P5)("project-maverick-collection-edit"),
                    m = (0, ce.b)().wallet.address,
                    g = (0, i.useFragment)(n(75053), null !== o && void 0 !== o ? o : null),
                    p = "".concat(null === g || void 0 === g ? void 0 : g.slug, "--closedCategoryAnnouncement"),
                    f = (0, t.useState)(!1),
                    k = f[0],
                    h = f[1];
                (0, t.useEffect)((function() {
                    if (d) {
                        var e = localStorage.getItem(p);
                        h(!!e)
                    }
                }), []);
                var v, x, b, T, S, C = (0, te.W)({
                        slug: null === g || void 0 === g ? void 0 : g.slug
                    }),
                    w = Boolean(!(null === g || void 0 === g ? void 0 : g.representativeAsset) || g.representativeAsset.assetContract.openseaVersion),
                    j = (null === g || void 0 === g ? void 0 : g.owner) && (0, de.N)(g.verificationStatus),
                    L = u("announcementBanner.newCategory.text", "Soon, we'll be updating our category options to make it easier for people to browse and discover collections. Go to the collection settings page to review or change your category."),
                    I = u("announcement.newCategory.heading", "Categories will be updated"),
                    O = (0, a.jsx)(re.bR, {
                        altText: null !== (v = null === g || void 0 === g ? void 0 : g.name) && void 0 !== v ? v : u("layout.heroBannerAlt", "Collection banner"),
                        bannerImageUrl: null === g || void 0 === g ? void 0 : g.bannerImageUrl
                    }),
                    D = (0, a.jsxs)(a.Fragment, {
                        children: [m === (null === g || void 0 === g || null === (l = g.owner) || void 0 === l ? void 0 : l.address) && !k && (0, a.jsx)(y, {
                            heading: I,
                            icon: "info",
                            text: L,
                            onClose: function() {
                                localStorage.setItem(p, "true"), h(!0)
                            }
                        }), O]
                    });
                return (0, a.jsx)(oe.P, {
                    actionBar: (0, a.jsx)(K, {
                        data: g,
                        isEditable: C,
                        isMintable: w,
                        slug: null === g || void 0 === g ? void 0 : g.slug
                    }),
                    banner: d ? D : O,
                    content: c,
                    header: (0, a.jsx)(ie.A, {
                        headerText: null !== (x = null === g || void 0 === g ? void 0 : g.name) && void 0 !== x ? x : "",
                        isLoading: !g,
                        verificationStatus: null === g || void 0 === g ? void 0 : g.verificationStatus
                    }),
                    image: (0, a.jsx)(J.G, {
                        altText: null !== (b = null === g || void 0 === g ? void 0 : g.name) && void 0 !== b ? b : u("layout.photoAlt", "Collection photo"),
                        imageUrl: null !== (T = null === g || void 0 === g ? void 0 : g.imageUrl) && void 0 !== T ? T : "",
                        variant: "collection"
                    }),
                    info: (0, a.jsx)(G, {
                        dataKey: g
                    }),
                    socialBar: (0, a.jsx)(ne, {
                        data: g
                    }),
                    subheader: (0, a.jsx)(se.w, {
                        accountLink: j ? (0, a.jsx)(r.e, {
                            dataKey: g.owner,
                            iconSize: 32,
                            tab: "created",
                            variant: "no-image"
                        }) : null,
                        isLoading: !g
                    }),
                    tabs: (0, a.jsx)(fe, {
                        currentTab: s,
                        dataKey: g,
                        isLoading: !g,
                        slug: null !== (S = null === g || void 0 === g ? void 0 : g.slug) && void 0 !== S ? S : ""
                    })
                })
            }
        },
        75110: function(e, l, n) {
            n.d(l, {
                W: function() {
                    return i
                }
            });
            var a = n(52050),
                t = (n(4402), n(47748)),
                i = function(e) {
                    var l = e.slug,
                        i = (0, a.Z)((0, t.i)(n(95549), {
                            collection: l
                        }, {
                            skip: !l
                        }), 1)[0],
                        r = null === i || void 0 === i ? void 0 : i.collection;
                    return !!(null === r || void 0 === r ? void 0 : r.isEditable)
                }
        },
        67882: function(e, l, n) {
            n.d(l, {
                y: function() {
                    return d
                }
            });
            var a = n(85034),
                t = n(70169),
                i = n(31373),
                r = n(24246),
                o = (n(27378), n(65218)),
                s = n.n(o),
                c = n(19378),
                u = s()((function() {
                    return n.e(56790).then(n.bind(n, 56790)).then((function(e) {
                        return e.ReportModalContent
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [56790]
                        }
                    }
                }),
                d = function(e) {
                    var l = e.isOpen,
                        n = e.onClose,
                        o = (0, i.Z)(e, ["isOpen", "onClose"]);
                    return (0, r.jsx)(c.u_, {
                        focusFirstFocusableElement: !1,
                        isOpen: l,
                        onClose: n,
                        children: (0, r.jsx)(u, (0, t.Z)((0, a.Z)({}, o), {
                            onClose: n
                        }))
                    })
                }
        },
        87916: function(e, l, n) {
            n.d(l, {
                $d: function() {
                    return i
                },
                AW: function() {
                    return r
                },
                c_: function() {
                    return s
                },
                nq: function() {
                    return o
                }
            });
            var a = n(36332),
                t = n(82455),
                i = (0, t.rJ)("submit asset report"),
                r = (0, a.V6)("submit account report"),
                o = (0, a.V6)("submit collection report"),
                s = (0, t.Y_)("open report modal")
        },
        89191: function(e, l, n) {
            n.d(l, {
                Z: function() {
                    return d
                }
            });
            var a = n(23842),
                t = n(52050),
                i = n(3204),
                r = n(35230),
                o = n.n(r),
                s = n(27378),
                c = n(59809),
                u = n(4118),
                d = function(e, l, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        d = r.delay,
                        m = void 0 === d ? 15e3 : d,
                        g = r.skipOnHidden,
                        p = void 0 !== g && g,
                        y = (0, s.useState)([]),
                        f = y[0],
                        k = y[1],
                        h = (0, s.useRef)(l);
                    h.current = l;
                    var v = (0, u.d)() && p;
                    (0, s.useEffect)((function() {
                        var l = !0,
                            r = void 0,
                            s = function() {
                                var u = (0, a.Z)(o().mark((function a() {
                                    var u, d, g;
                                    return o().wrap((function(a) {
                                        for (;;) switch (a.prev = a.next) {
                                            case 0:
                                                if (!v) {
                                                    a.next = 3;
                                                    break
                                                }
                                                return r = setTimeout(s, m), a.abrupt("return");
                                            case 3:
                                                return a.t0 = t.Z, a.next = 6, (0, c.he)(e, h.current, void 0, void 0, {
                                                    retain: !0
                                                });
                                            case 6:
                                                if (a.t1 = a.sent, u = (0, a.t0)(a.t1, 2), d = u[0], g = u[1], l) {
                                                    a.next = 13;
                                                    break
                                                }
                                                return null === g || void 0 === g || g.dispose(), a.abrupt("return");
                                            case 13:
                                                return k((function(e) {
                                                    return g ? (0, i.Z)(e).concat([g]) : e
                                                })), a.next = 16, n(d);
                                            case 16:
                                                r = setTimeout(s, m);
                                            case 17:
                                            case "end":
                                                return a.stop()
                                        }
                                    }), a)
                                })));
                                return function() {
                                    return u.apply(this, arguments)
                                }
                            }();
                        return r = setTimeout(s, m),
                            function() {
                                l = !1, r && clearTimeout(r), f.forEach((function(e) {
                                    return e.dispose()
                                }))
                            }
                    }), [m, f, e, n, v])
                }
        },
        1934: function(e, l, n) {
            n.r(l);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CollectionActionBar_data",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "relayId",
                    storageKey: null
                }, {
                    alias: null,
                    args: [{
                        kind: "Literal",
                        name: "first",
                        value: 2
                    }],
                    concreteType: "AssetContractTypeConnection",
                    kind: "LinkedField",
                    name: "assetContracts",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "AssetContractTypeEdge",
                        kind: "LinkedField",
                        name: "edges",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "AssetContractType",
                            kind: "LinkedField",
                            name: "node",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "blockExplorerLink",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "ChainType",
                                kind: "LinkedField",
                                name: "chainData",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "BlockExplorerType",
                                    kind: "LinkedField",
                                    name: "blockExplorer",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "name",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "identifier",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: "assetContracts(first:2)"
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "discordUrl",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "externalUrl",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "instagramUsername",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "mediumUsername",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "telegramUrl",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "twitterUsername",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "connectedTwitterUsername",
                    storageKey: null
                }, {
                    kind: "InlineDataFragmentSpread",
                    name: "collection_url",
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCategory",
                        storageKey: null
                    }],
                    args: null,
                    argumentDefinitions: []
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CollectionWatchlistButton_data"
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "bcb7eb20b0d63ed9c267ed6d327dbb4a"
            };
            l.default = a
        },
        50552: function(e, l, n) {
            n.r(l);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CollectionDescriptionMetadata_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "CollectionStatsV2Type",
                    kind: "LinkedField",
                    name: "statsV2",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "totalSupply",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "createdDate",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "totalCreatorFeeBasisPoints",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "ChainType",
                    kind: "LinkedField",
                    name: "defaultChain",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "displayName",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "identifier",
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "f9c14fcc0b75a4b792234e713441d34c"
            };
            l.default = a
        },
        51135: function(e, l, n) {
            n.r(l);
            var a = function() {
                var e = [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "unit",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "symbol",
                    storageKey: null
                }];
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "CollectionInfoInnerLive_data",
                    selections: [{
                        kind: "InlineDataFragmentSpread",
                        name: "collection_stats",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "CollectionStatsV2Type",
                            kind: "LinkedField",
                            name: "statsV2",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "totalListed",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "numOwners",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "totalQuantity",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "totalSupply",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PriceType",
                                kind: "LinkedField",
                                name: "totalVolume",
                                plural: !1,
                                selections: e,
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PriceType",
                                kind: "LinkedField",
                                name: "floorPrice",
                                plural: !1,
                                selections: e,
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: [{
                                kind: "Literal",
                                name: "first",
                                value: 1
                            }],
                            concreteType: "OrderV2TypeConnection",
                            kind: "LinkedField",
                            name: "collectionOffers",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "OrderV2TypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "OrderV2Type",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "perUnitPriceType",
                                        plural: !1,
                                        selections: e,
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: "collectionOffers(first:1)"
                        }],
                        args: null,
                        argumentDefinitions: []
                    }],
                    type: "CollectionType",
                    abstractKey: null
                }
            }();
            a.hash = "4c86561ef1186bf15f808872b148ab83", l.default = a
        },
        12792: function(e, l, n) {
            n.r(l);
            var a = function() {
                var e = [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "unit",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "symbol",
                    storageKey: null
                }];
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "CollectionInfoInner_data",
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCollectionOffersEnabled",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "description",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "collection_url",
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "slug",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "isCategory",
                            storageKey: null
                        }],
                        args: null,
                        argumentDefinitions: []
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "collection_stats",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "CollectionStatsV2Type",
                            kind: "LinkedField",
                            name: "statsV2",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "totalListed",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "numOwners",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "totalQuantity",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "totalSupply",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PriceType",
                                kind: "LinkedField",
                                name: "totalVolume",
                                plural: !1,
                                selections: e,
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PriceType",
                                kind: "LinkedField",
                                name: "floorPrice",
                                plural: !1,
                                selections: e,
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: [{
                                kind: "Literal",
                                name: "first",
                                value: 1
                            }],
                            concreteType: "OrderV2TypeConnection",
                            kind: "LinkedField",
                            name: "collectionOffers",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "OrderV2TypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "OrderV2Type",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "perUnitPriceType",
                                        plural: !1,
                                        selections: e,
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: "collectionOffers(first:1)"
                        }],
                        args: null,
                        argumentDefinitions: []
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "CollectionDescriptionMetadata_data"
                    }],
                    type: "CollectionType",
                    abstractKey: null
                }
            }();
            a.hash = "add0df805ad78675469026fcb6cac1ef", l.default = a
        },
        10566: function(e, l, n) {
            n.r(l);
            var a = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    }],
                    l = [{
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    }],
                    n = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    }],
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "CollectionInfoPollingQuery",
                        selections: [{
                            alias: null,
                            args: l,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [{
                                args: null,
                                kind: "FragmentSpread",
                                name: "CollectionInfoInnerLive_data"
                            }],
                            storageKey: null
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "CollectionInfoPollingQuery",
                        selections: [{
                            alias: null,
                            args: l,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionStatsV2Type",
                                kind: "LinkedField",
                                name: "statsV2",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "totalListed",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "numOwners",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "totalQuantity",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "totalSupply",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PriceType",
                                    kind: "LinkedField",
                                    name: "totalVolume",
                                    plural: !1,
                                    selections: n,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PriceType",
                                    kind: "LinkedField",
                                    name: "floorPrice",
                                    plural: !1,
                                    selections: n,
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: [{
                                    kind: "Literal",
                                    name: "first",
                                    value: 1
                                }],
                                concreteType: "OrderV2TypeConnection",
                                kind: "LinkedField",
                                name: "collectionOffers",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "OrderV2TypeEdge",
                                    kind: "LinkedField",
                                    name: "edges",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "OrderV2Type",
                                        kind: "LinkedField",
                                        name: "node",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "perUnitPriceType",
                                            plural: !1,
                                            selections: n,
                                            storageKey: null
                                        }, a],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: "collectionOffers(first:1)"
                            }, a],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "68f9b84f96159c09eb7ad3f90121e155",
                        id: null,
                        metadata: {},
                        name: "CollectionInfoPollingQuery",
                        operationKind: "query",
                        text: "query CollectionInfoPollingQuery(\n  $collection: CollectionSlug!\n) {\n  collection(collection: $collection) {\n    ...CollectionInfoInnerLive_data\n    id\n  }\n}\n\nfragment CollectionInfoInnerLive_data on CollectionType {\n  ...collection_stats\n}\n\nfragment collection_stats on CollectionType {\n  statsV2 {\n    totalListed\n    numOwners\n    totalQuantity\n    totalSupply\n    totalVolume {\n      unit\n      symbol\n    }\n    floorPrice {\n      unit\n      symbol\n    }\n  }\n  collectionOffers(first: 1) {\n    edges {\n      node {\n        perUnitPriceType {\n          unit\n          symbol\n        }\n        id\n      }\n    }\n  }\n}\n"
                    }
                }
            }();
            a.hash = "e81ca4e354a856fb2a002319f18b6aea", l.default = a
        },
        63438: function(e, l, n) {
            n.r(l);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CollectionInfo_data",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "slug",
                    storageKey: null
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CollectionInfoInner_data"
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "c2d720f39a51996ade9c97f9246739cc"
            };
            l.default = a
        },
        80687: function(e, l, n) {
            n.r(l);
            var a = function() {
                var e = {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "slug",
                    storageKey: null
                };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "CollectionPageHead_collection",
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "description",
                        storageKey: null
                    }, e, {
                        alias: null,
                        args: null,
                        concreteType: "AccountType",
                        kind: "LinkedField",
                        name: "owner",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "address",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "displayName",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "collection_url",
                        selections: [e, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "isCategory",
                            storageKey: null
                        }],
                        args: null,
                        argumentDefinitions: []
                    }],
                    type: "CollectionType",
                    abstractKey: null
                }
            }();
            a.hash = "e8458e9c294108def00a17bebfbda3b0", l.default = a
        },
        75053: function(e, l, n) {
            n.r(l);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CollectionPageLayout_collection",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "slug",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "imageUrl",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "bannerImageUrl",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "verificationStatus",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "AccountType",
                    kind: "LinkedField",
                    name: "owner",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "address",
                        storageKey: null
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "AccountLink_data"
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "AssetType",
                    kind: "LinkedField",
                    name: "representativeAsset",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "AssetContractType",
                        kind: "LinkedField",
                        name: "assetContract",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "openseaVersion",
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CollectionActionBar_data"
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CollectionInfo_data"
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CollectionSocialBar_data"
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CollectionTabs_collection"
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "fecc167ca090ec4739d8da4ca933029c"
            };
            l.default = a
        },
        79102: function(e, l, n) {
            n.r(l);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CollectionSocialBar_data",
                selections: [{
                    alias: null,
                    args: [{
                        kind: "Literal",
                        name: "first",
                        value: 2
                    }],
                    concreteType: "AssetContractTypeConnection",
                    kind: "LinkedField",
                    name: "assetContracts",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "AssetContractTypeEdge",
                        kind: "LinkedField",
                        name: "edges",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "AssetContractType",
                            kind: "LinkedField",
                            name: "node",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "address",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "blockExplorerLink",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "ChainType",
                                kind: "LinkedField",
                                name: "chainData",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "BlockExplorerType",
                                    kind: "LinkedField",
                                    name: "blockExplorer",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "name",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "identifier",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: "assetContracts(first:2)"
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "discordUrl",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "externalUrl",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "instagramUsername",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "mediumUsername",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "telegramUrl",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "twitterUsername",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "connectedDiscordGuildId",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "connectedTwitterUsername",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "connectedInstagramUsername",
                    storageKey: null
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "519610e3399e18e7177743fd4e3e52c6"
            };
            l.default = a
        },
        46865: function(e, l, n) {
            n.r(l);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CollectionTabs_collection",
                selections: [{
                    args: null,
                    kind: "FragmentSpread",
                    name: "useIsAnalyticsTabEnabled_collection"
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "9f393769914092ede8e41b6797db90ca"
            };
            l.default = a
        },
        95549: function(e, l, n) {
            n.r(l);
            var a = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    }],
                    l = [{
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    }],
                    n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isEditable",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "useIsEditableQuery",
                        selections: [{
                            alias: null,
                            args: l,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [n],
                            storageKey: null
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "useIsEditableQuery",
                        selections: [{
                            alias: null,
                            args: l,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [n, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "id",
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "f9bc9272e5ae7706939fe76e4f4f3561",
                        id: null,
                        metadata: {},
                        name: "useIsEditableQuery",
                        operationKind: "query",
                        text: "query useIsEditableQuery(\n  $collection: CollectionSlug!\n) {\n  collection(collection: $collection) {\n    isEditable\n    id\n  }\n}\n"
                    }
                }
            }();
            a.hash = "c9213e59c938de60d4452ecdecd55f34", l.default = a
        }
    }
]);
//# sourceMappingURL=65682-2f20dba0293fba06.js.map