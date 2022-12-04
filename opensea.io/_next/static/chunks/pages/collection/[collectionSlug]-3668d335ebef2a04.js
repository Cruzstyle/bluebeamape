(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [45171], {
        84966: function(n, e, l) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/collection/[collectionSlug]", function() {
                return l(45635)
            }])
        },
        50847: function(n, e, l) {
            "use strict";
            l.r(e);
            var a = function() {
                var n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    },
                    e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collectionQuery"
                    },
                    l = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collections"
                    },
                    a = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "includeCollectionFilter"
                    },
                    t = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "includeHiddenCollections"
                    },
                    i = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "numericTraits"
                    },
                    s = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "prioritizeBuyNow"
                    },
                    r = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "query"
                    },
                    o = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "resultModel"
                    },
                    d = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "showContextMenu"
                    },
                    c = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortAscending"
                    },
                    u = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    },
                    y = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "stringTraits"
                    },
                    m = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "toggles"
                    },
                    g = {
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    },
                    p = [g],
                    k = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCollectionOffersEnabled",
                        storageKey: null
                    },
                    T = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "verificationStatus",
                        storageKey: null
                    },
                    _ = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "enabledRarities",
                        storageKey: null
                    },
                    A = {
                        kind: "Variable",
                        name: "collections",
                        variableName: "collections"
                    },
                    f = {
                        kind: "Variable",
                        name: "numericTraits",
                        variableName: "numericTraits"
                    },
                    F = {
                        kind: "Variable",
                        name: "prioritizeBuyNow",
                        variableName: "prioritizeBuyNow"
                    },
                    C = {
                        kind: "Variable",
                        name: "sortAscending",
                        variableName: "sortAscending"
                    },
                    K = {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    },
                    S = {
                        kind: "Variable",
                        name: "stringTraits",
                        variableName: "stringTraits"
                    },
                    I = {
                        kind: "Variable",
                        name: "toggles",
                        variableName: "toggles"
                    },
                    L = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    b = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    },
                    V = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "address",
                        storageKey: null
                    },
                    P = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "displayName",
                        storageKey: null
                    },
                    h = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    v = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "config",
                        storageKey: null
                    },
                    B = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCompromised",
                        storageKey: null
                    },
                    N = {
                        alias: null,
                        args: null,
                        concreteType: "UserType",
                        kind: "LinkedField",
                        name: "user",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "publicUsername",
                            storageKey: null
                        }, h],
                        storageKey: null
                    },
                    E = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    M = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCategory",
                        storageKey: null
                    },
                    w = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    },
                    D = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "blockExplorerLink",
                        storageKey: null
                    },
                    O = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "identifier",
                        storageKey: null
                    },
                    Q = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    },
                    U = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    x = [Q, U],
                    R = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "totalCreatorFeeBasisPoints",
                        storageKey: null
                    },
                    $ = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "key",
                        storageKey: null
                    },
                    q = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "maxRank",
                        storageKey: null
                    },
                    H = [{
                        kind: "Literal",
                        name: "first",
                        value: 10
                    }],
                    Z = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    },
                    W = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "cursor",
                        storageKey: null
                    },
                    G = {
                        alias: null,
                        args: null,
                        concreteType: "PageInfo",
                        kind: "LinkedField",
                        name: "pageInfo",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "endCursor",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "hasNextPage",
                            storageKey: null
                        }],
                        storageKey: null
                    },
                    z = [U, h],
                    j = [A, {
                        kind: "Literal",
                        name: "first",
                        value: 20
                    }, f, F, {
                        kind: "Variable",
                        name: "querystring",
                        variableName: "query"
                    }, {
                        kind: "Variable",
                        name: "resultType",
                        variableName: "resultModel"
                    }, C, K, S, I],
                    Y = {
                        kind: "TypeDiscriminator",
                        abstractKey: "__isItemType"
                    },
                    X = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "orderType",
                        storageKey: null
                    },
                    J = [V, h],
                    nn = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "usd",
                        storageKey: null
                    },
                    en = [Q, nn],
                    ln = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "openedAt",
                        storageKey: null
                    },
                    an = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "closedAt",
                        storageKey: null
                    },
                    tn = {
                        alias: null,
                        args: null,
                        concreteType: "ChainType",
                        kind: "LinkedField",
                        name: "chain",
                        plural: !1,
                        selections: [O],
                        storageKey: null
                    },
                    sn = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "tokenId",
                        storageKey: null
                    },
                    rn = {
                        alias: null,
                        args: null,
                        concreteType: "DisplayDataType",
                        kind: "LinkedField",
                        name: "displayData",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "cardDisplayStyle",
                            storageKey: null
                        }],
                        storageKey: null
                    },
                    on = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "animationUrl",
                        storageKey: null
                    },
                    dn = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "displayImageUrl",
                        storageKey: null
                    },
                    cn = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isDelisted",
                        storageKey: null
                    },
                    un = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "backgroundColor",
                        storageKey: null
                    },
                    yn = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "decimals",
                        storageKey: null
                    },
                    mn = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "openseaSellerFeeBasisPoints",
                        storageKey: null
                    },
                    gn = {
                        kind: "InlineFragment",
                        selections: [h],
                        type: "Node",
                        abstractKey: "__isNode"
                    },
                    pn = [Q],
                    kn = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isVerified",
                        storageKey: null
                    },
                    Tn = {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "item",
                        plural: !1,
                        selections: [{
                            kind: "InlineFragment",
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "isCurrentlyFungible",
                                storageKey: null
                            }],
                            type: "AssetType",
                            abstractKey: null
                        }, {
                            kind: "InlineFragment",
                            selections: [{
                                alias: "bundleCollection",
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "collection",
                                plural: !1,
                                selections: [T, h],
                                storageKey: null
                            }],
                            type: "AssetBundleType",
                            abstractKey: null
                        }],
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: [n, e, l, a, t, i, s, r, o, d, c, u, y, m],
                        kind: "Fragment",
                        metadata: null,
                        name: "CollectionPageQuery",
                        selections: [{
                            alias: null,
                            args: p,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [k, T, _, {
                                args: null,
                                kind: "FragmentSpread",
                                name: "useIsRarityEnabled_collection"
                            }, {
                                args: null,
                                kind: "FragmentSpread",
                                name: "CollectionPageHead_collection"
                            }, {
                                args: null,
                                kind: "FragmentSpread",
                                name: "CollectionPageLayout_collection"
                            }],
                            storageKey: null
                        }, {
                            args: [g, {
                                kind: "Variable",
                                name: "collectionQuery",
                                variableName: "collectionQuery"
                            }, A, {
                                kind: "Variable",
                                name: "includeCollectionFilter",
                                variableName: "includeCollectionFilter"
                            }, {
                                kind: "Variable",
                                name: "includeHiddenCollections",
                                variableName: "includeHiddenCollections"
                            }, f, F, {
                                kind: "Variable",
                                name: "query",
                                variableName: "query"
                            }, {
                                kind: "Variable",
                                name: "resultModel",
                                variableName: "resultModel"
                            }, C, K, S, I],
                            kind: "FragmentSpread",
                            name: "AssetSearchCollectionView_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [n, l, e, t, i, r, c, u, y, m, o, d, a, s],
                        kind: "Operation",
                        name: "CollectionPageQuery",
                        selections: [{
                            alias: null,
                            args: p,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [k, T, _, L, b, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "description",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "AccountType",
                                kind: "LinkedField",
                                name: "owner",
                                plural: !1,
                                selections: [V, P, h, v, B, N, E],
                                storageKey: null
                            }, M, E, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "bannerImageUrl",
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
                                    }, h],
                                    storageKey: null
                                }, h],
                                storageKey: null
                            }, w, {
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
                                        selections: [D, {
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
                                                selections: [b, O],
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, h, V],
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
                                    selections: x,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PriceType",
                                    kind: "LinkedField",
                                    name: "floorPrice",
                                    plural: !1,
                                    selections: x,
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
                                            selections: x,
                                            storageKey: null
                                        }, h],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: "collectionOffers(first:1)"
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "createdDate",
                                storageKey: null
                            }, R, {
                                alias: null,
                                args: null,
                                concreteType: "ChainType",
                                kind: "LinkedField",
                                name: "defaultChain",
                                plural: !1,
                                selections: [P, O],
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
                                name: "connectedInstagramUsername",
                                storageKey: null
                            }, h, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "isEligibleForFastPolling",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "NumericTraitTypePair",
                                kind: "LinkedField",
                                name: "numericTraits",
                                plural: !0,
                                selections: [$, {
                                    alias: null,
                                    args: null,
                                    concreteType: "NumericTraitType",
                                    kind: "LinkedField",
                                    name: "value",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "max",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "min",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "StringTraitType",
                                kind: "LinkedField",
                                name: "stringTraits",
                                plural: !0,
                                selections: [$, {
                                    alias: null,
                                    args: null,
                                    concreteType: "StringTraitCountType",
                                    kind: "LinkedField",
                                    name: "counts",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "count",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "value",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "RarityDataType",
                                kind: "LinkedField",
                                name: "representativeRarityData",
                                plural: !1,
                                selections: [q, h],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "queriedAt",
                            storageKey: null
                        }, {
                            alias: null,
                            args: H,
                            concreteType: "PaymentAssetTypeConnection",
                            kind: "LinkedField",
                            name: "paymentAssets",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "PaymentAssetTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "PaymentAssetType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [U, h, Z],
                                    storageKey: null
                                }, W],
                                storageKey: null
                            }, G],
                            storageKey: "paymentAssets(first:10)"
                        }, {
                            alias: null,
                            args: H,
                            filters: ["symbolIcontains"],
                            handle: "connection",
                            key: "PaymentFilter_paymentAssets",
                            kind: "LinkedHandle",
                            name: "paymentAssets"
                        }, {
                            alias: "PaymentFilter_collection",
                            args: p,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "PaymentAssetType",
                                kind: "LinkedField",
                                name: "paymentAssets",
                                plural: !0,
                                selections: z,
                                storageKey: null
                            }, h],
                            storageKey: null
                        }, {
                            alias: "selectedCollections",
                            args: [A, {
                                kind: "Literal",
                                name: "first",
                                value: 25
                            }, {
                                kind: "Literal",
                                name: "includeHidden",
                                value: !0
                            }],
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "collections",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [E, b, L, h],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: "search",
                            args: j,
                            concreteType: "ItemTypeConnection",
                            kind: "LinkedField",
                            name: "collectionItems",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "ItemTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [Z, w, Y, {
                                        alias: null,
                                        args: null,
                                        concreteType: "ESOrderDataType",
                                        kind: "LinkedField",
                                        name: "orderData",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "OrderV2Type",
                                            kind: "LinkedField",
                                            name: "bestAskV2",
                                            plural: !1,
                                            selections: [Z, h, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceType",
                                                kind: "LinkedField",
                                                name: "priceType",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "eth",
                                                    storageKey: null
                                                }, Q],
                                                storageKey: null
                                            }, X, {
                                                alias: null,
                                                args: null,
                                                concreteType: "AccountType",
                                                kind: "LinkedField",
                                                name: "maker",
                                                plural: !1,
                                                selections: J,
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceType",
                                                kind: "LinkedField",
                                                name: "perUnitPriceType",
                                                plural: !1,
                                                selections: en,
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceType",
                                                kind: "LinkedField",
                                                name: "dutchAuctionFinalPriceType",
                                                plural: !1,
                                                selections: en,
                                                storageKey: null
                                            }, ln, an, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PaymentAssetType",
                                                kind: "LinkedField",
                                                name: "payment",
                                                plural: !1,
                                                selections: [U, h, w],
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "item",
                                                plural: !1,
                                                selections: [Z, Y, w, tn, P, {
                                                    kind: "InlineFragment",
                                                    selections: [sn, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "AssetContractType",
                                                        kind: "LinkedField",
                                                        name: "assetContract",
                                                        plural: !1,
                                                        selections: [V, h, D],
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "CollectionType",
                                                        kind: "LinkedField",
                                                        name: "collection",
                                                        plural: !1,
                                                        selections: [L, T, b, M, h, rn],
                                                        storageKey: null
                                                    }, on, dn, E, cn, un, yn, {
                                                        kind: "InlineFragment",
                                                        selections: [{
                                                            kind: "InlineFragment",
                                                            selections: [mn, {
                                                                alias: null,
                                                                args: null,
                                                                kind: "ScalarField",
                                                                name: "totalCreatorFee",
                                                                storageKey: null
                                                            }],
                                                            type: "AssetType",
                                                            abstractKey: null
                                                        }, {
                                                            kind: "InlineFragment",
                                                            selections: [{
                                                                alias: "bundleCollection",
                                                                args: null,
                                                                concreteType: "CollectionType",
                                                                kind: "LinkedField",
                                                                name: "collection",
                                                                plural: !1,
                                                                selections: [mn, R, h],
                                                                storageKey: null
                                                            }],
                                                            type: "AssetBundleType",
                                                            abstractKey: null
                                                        }],
                                                        type: "ItemType",
                                                        abstractKey: "__isItemType"
                                                    }],
                                                    type: "AssetType",
                                                    abstractKey: null
                                                }, gn, {
                                                    kind: "InlineFragment",
                                                    selections: [{
                                                        alias: null,
                                                        args: [{
                                                            kind: "Literal",
                                                            name: "first",
                                                            value: 30
                                                        }],
                                                        concreteType: "AssetQuantityTypeConnection",
                                                        kind: "LinkedField",
                                                        name: "assetQuantities",
                                                        plural: !1,
                                                        selections: [{
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "AssetQuantityTypeEdge",
                                                            kind: "LinkedField",
                                                            name: "edges",
                                                            plural: !0,
                                                            selections: [{
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "AssetQuantityType",
                                                                kind: "LinkedField",
                                                                name: "node",
                                                                plural: !1,
                                                                selections: [{
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: "AssetType",
                                                                    kind: "LinkedField",
                                                                    name: "asset",
                                                                    plural: !1,
                                                                    selections: [w, h, P, {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "AssetContractType",
                                                                        kind: "LinkedField",
                                                                        name: "assetContract",
                                                                        plural: !1,
                                                                        selections: [V, D, h],
                                                                        storageKey: null
                                                                    }, {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "CollectionType",
                                                                        kind: "LinkedField",
                                                                        name: "collection",
                                                                        plural: !1,
                                                                        selections: [L, T, b, M, h, rn, {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: "ScalarField",
                                                                            name: "logo",
                                                                            storageKey: null
                                                                        }],
                                                                        storageKey: null
                                                                    }, on, dn, E, cn, un, yn, sn, tn],
                                                                    storageKey: null
                                                                }, h],
                                                                storageKey: null
                                                            }],
                                                            storageKey: null
                                                        }],
                                                        storageKey: "assetQuantities(first:30)"
                                                    }],
                                                    type: "AssetBundleType",
                                                    abstractKey: null
                                                }],
                                                storageKey: null
                                            }, w, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "remainingQuantityType",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "supportsGiftingOnPurchase",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "OrderV2Type",
                                            kind: "LinkedField",
                                            name: "bestBidV2",
                                            plural: !1,
                                            selections: [X, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceType",
                                                kind: "LinkedField",
                                                name: "priceType",
                                                plural: !1,
                                                selections: pn,
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceType",
                                                kind: "LinkedField",
                                                name: "perUnitPriceType",
                                                plural: !1,
                                                selections: pn,
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceType",
                                                kind: "LinkedField",
                                                name: "dutchAuctionFinalPriceType",
                                                plural: !1,
                                                selections: pn,
                                                storageKey: null
                                            }, ln, an, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PaymentAssetType",
                                                kind: "LinkedField",
                                                name: "payment",
                                                plural: !1,
                                                selections: z,
                                                storageKey: null
                                            }, h],
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, tn, b, {
                                        alias: null,
                                        args: null,
                                        concreteType: "ESAssetEventDataType",
                                        kind: "LinkedField",
                                        name: "assetEventData",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "ESAssetEventType",
                                            kind: "LinkedField",
                                            name: "lastSale",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "AssetQuantityType",
                                                kind: "LinkedField",
                                                name: "unitPriceQuantity",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "AssetType",
                                                    kind: "LinkedField",
                                                    name: "asset",
                                                    plural: !1,
                                                    selections: [yn, U, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "usdSpotPrice",
                                                        storageKey: null
                                                    }, h],
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "quantity",
                                                    storageKey: null
                                                }, h],
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [on, dn, E, cn, un, {
                                            alias: null,
                                            args: null,
                                            concreteType: "CollectionType",
                                            kind: "LinkedField",
                                            name: "collection",
                                            plural: !1,
                                            selections: [rn, h, L, b, kn, M, _, w],
                                            storageKey: null
                                        }, yn, sn, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetContractType",
                                            kind: "LinkedField",
                                            name: "assetContract",
                                            plural: !1,
                                            selections: [V, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "chain",
                                                storageKey: null
                                            }, h],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "ESOrderDataType",
                                            kind: "LinkedField",
                                            name: "orderData",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "OrderV2Type",
                                                kind: "LinkedField",
                                                name: "bestAskV2",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "PriceType",
                                                    kind: "LinkedField",
                                                    name: "priceType",
                                                    plural: !1,
                                                    selections: [nn],
                                                    storageKey: null
                                                }, Tn],
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "RarityDataType",
                                            kind: "LinkedField",
                                            name: "defaultRarityData",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "rank",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "rankPercentile",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "rankCount",
                                                storageKey: null
                                            }, q, h],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetOwnershipType",
                                            kind: "LinkedField",
                                            name: "largestOwner",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "AccountType",
                                                kind: "LinkedField",
                                                name: "owner",
                                                plural: !1,
                                                selections: [V, v, B, N, P, E, h],
                                                storageKey: null
                                            }, h],
                                            storageKey: null
                                        }, {
                                            condition: "showContextMenu",
                                            kind: "Condition",
                                            passingValue: !0,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "AccountType",
                                                kind: "LinkedField",
                                                name: "creator",
                                                plural: !1,
                                                selections: J,
                                                storageKey: null
                                            }]
                                        }],
                                        type: "AssetType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: [{
                                                kind: "Literal",
                                                name: "first",
                                                value: 18
                                            }],
                                            concreteType: "AssetQuantityTypeConnection",
                                            kind: "LinkedField",
                                            name: "assetQuantities",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "AssetQuantityTypeEdge",
                                                kind: "LinkedField",
                                                name: "edges",
                                                plural: !0,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "AssetQuantityType",
                                                    kind: "LinkedField",
                                                    name: "node",
                                                    plural: !1,
                                                    selections: [{
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "AssetType",
                                                        kind: "LinkedField",
                                                        name: "asset",
                                                        plural: !1,
                                                        selections: [w, on, dn, E, cn, un, {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "CollectionType",
                                                            kind: "LinkedField",
                                                            name: "collection",
                                                            plural: !1,
                                                            selections: [rn, h],
                                                            storageKey: null
                                                        }, yn, h],
                                                        storageKey: null
                                                    }, h],
                                                    storageKey: null
                                                }],
                                                storageKey: null
                                            }],
                                            storageKey: "assetQuantities(first:18)"
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "ESOrderDataType",
                                            kind: "LinkedField",
                                            name: "orderData",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "OrderV2Type",
                                                kind: "LinkedField",
                                                name: "bestAskV2",
                                                plural: !1,
                                                selections: [Tn],
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, {
                                            alias: "bundleCollection",
                                            args: null,
                                            concreteType: "CollectionType",
                                            kind: "LinkedField",
                                            name: "collection",
                                            plural: !1,
                                            selections: [L, b, kn, M, _, h, w],
                                            storageKey: null
                                        }, L],
                                        type: "AssetBundleType",
                                        abstractKey: null
                                    }, gn],
                                    storageKey: null
                                }, W],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "totalCount",
                                storageKey: null
                            }, G],
                            storageKey: null
                        }, {
                            alias: "search",
                            args: j,
                            filters: ["collections", "isAutoHidden", "numericTraits", "paymentAssets", "resultType", "priceFilter", "querystring", "safelistRequestStatuses", "sortAscending", "sortBy", "stringTraits", "toggles", "prioritizeBuyNow", "rarityFilter"],
                            handle: "connection",
                            key: "AssetSearchCollection_search",
                            kind: "LinkedHandle",
                            name: "collectionItems"
                        }]
                    },
                    params: {
                        cacheID: "19de96bcf3bd35f4cb9ee3230351b71f",
                        id: null,
                        metadata: {},
                        name: "CollectionPageQuery",
                        operationKind: "query",
                        text: "query CollectionPageQuery(\n  $collection: CollectionSlug!\n  $collections: [CollectionSlug!]\n  $numericTraits: [TraitRangeType!]\n  $query: String\n  $sortAscending: Boolean\n  $sortBy: SearchSortBy\n  $stringTraits: [TraitInputType!]\n  $toggles: [SearchToggle!]\n  $resultModel: SearchResultModel\n  $showContextMenu: Boolean!\n  $prioritizeBuyNow: Boolean\n) {\n  collection(collection: $collection) {\n    isCollectionOffersEnabled\n    verificationStatus\n    enabledRarities\n    ...useIsRarityEnabled_collection\n    ...CollectionPageHead_collection\n    ...CollectionPageLayout_collection\n    id\n  }\n  ...AssetSearchCollectionView_data_2ZxBTm\n}\n\nfragment AccountLink_data on AccountType {\n  address\n  config\n  isCompromised\n  user {\n    publicUsername\n    id\n  }\n  displayName\n  ...ProfileImage_data\n  ...wallet_accountKey\n  ...accounts_url\n}\n\nfragment AddToCartAndQuickBuyButton_order on OrderV2Type {\n  ...useIsQuickBuyEnabled_order\n  ...ItemAddToCartButton_order\n  ...QuickBuyButton_order\n}\n\nfragment AssetCardBuyNow_data on AssetType {\n  tokenId\n  relayId\n  assetContract {\n    address\n    chain\n    id\n  }\n  orderData {\n    bestAskV2 {\n      relayId\n      priceType {\n        usd\n      }\n      id\n    }\n  }\n}\n\nfragment AssetContextMenu_data on AssetType {\n  ...asset_edit_url\n  ...asset_url\n  ...itemEvents_data\n  relayId\n  isDelisted\n  creator {\n    address\n    id\n  }\n  imageUrl\n}\n\nfragment AssetMediaAnimation_asset on AssetType {\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaAudio_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaContainer_asset_2V84VL on AssetType {\n  backgroundColor\n  ...AssetMediaEditions_asset_2V84VL\n}\n\nfragment AssetMediaEditions_asset_2V84VL on AssetType {\n  decimals\n}\n\nfragment AssetMediaImage_asset on AssetType {\n  backgroundColor\n  imageUrl\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n}\n\nfragment AssetMediaPlaceholderImage_asset on AssetType {\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n}\n\nfragment AssetMediaVideo_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaWebgl_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  displayImageUrl\n  imageUrl\n  isDelisted\n  ...AssetMediaAnimation_asset\n  ...AssetMediaAudio_asset\n  ...AssetMediaContainer_asset_2V84VL\n  ...AssetMediaImage_asset\n  ...AssetMediaPlaceholderImage_asset\n  ...AssetMediaVideo_asset\n  ...AssetMediaWebgl_asset\n}\n\nfragment AssetMedia_asset_2V84VL on AssetType {\n  animationUrl\n  displayImageUrl\n  imageUrl\n  isDelisted\n  ...AssetMediaAnimation_asset\n  ...AssetMediaAudio_asset\n  ...AssetMediaContainer_asset_2V84VL\n  ...AssetMediaImage_asset\n  ...AssetMediaPlaceholderImage_asset\n  ...AssetMediaVideo_asset\n  ...AssetMediaWebgl_asset\n}\n\nfragment AssetQuantity_data on AssetQuantityType {\n  asset {\n    ...Price_data\n    id\n  }\n  quantity\n}\n\nfragment AssetSearchCollectionView_data_2ZxBTm on Query {\n  ...AssetSearchRefreshBar_data_2YoIWt\n  ...AssetSearchSortDropdown_data\n  ...AssetSearchCollection_data_2ZxBTm\n}\n\nfragment AssetSearchCollection_data_2ZxBTm on Query {\n  queriedAt\n  ...AssetSearchFilter_data_PFx8Z\n  ...SearchPills_data_2Kg4Sq\n  search: collectionItems(collections: $collections, first: 20, numericTraits: $numericTraits, resultType: $resultModel, querystring: $query, sortAscending: $sortAscending, sortBy: $sortBy, stringTraits: $stringTraits, toggles: $toggles, prioritizeBuyNow: $prioritizeBuyNow) {\n    edges {\n      node {\n        __typename\n        relayId\n        ...readItemHasBestAsk_item\n        ...AssetSearchList_data_27d9G3\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      cursor\n    }\n    totalCount\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AssetSearchFilter_data_PFx8Z on Query {\n  collection(collection: $collection) {\n    numericTraits {\n      key\n      value {\n        max\n        min\n      }\n      ...NumericTraitFilter_data\n    }\n    stringTraits {\n      key\n      ...StringTraitFilter_data\n    }\n    defaultChain {\n      identifier\n    }\n    enabledRarities\n    ...RarityFilter_data\n    ...useIsRarityEnabled_collection\n    id\n  }\n  ...PaymentFilter_data_2YoIWt\n}\n\nfragment AssetSearchList_data_27d9G3 on ItemType {\n  __isItemType: __typename\n  __typename\n  relayId\n  ...ItemCard_data_1OrK6u\n  ... on AssetType {\n    collection {\n      isVerified\n      relayId\n      id\n    }\n  }\n  ... on AssetBundleType {\n    bundleCollection: collection {\n      isVerified\n      relayId\n      id\n    }\n  }\n  chain {\n    identifier\n  }\n}\n\nfragment AssetSearchRefreshBar_data_2YoIWt on Query {\n  ...useCollectionItemsPolling_data_2YoIWt\n}\n\nfragment AssetSearchSortDropdown_data on Query {\n  collection(collection: $collection) {\n    ...useIsRarityEnabled_collection\n    id\n  }\n}\n\nfragment CollectionActionBar_data on CollectionType {\n  relayId\n  assetContracts(first: 2) {\n    edges {\n      node {\n        blockExplorerLink\n        chainData {\n          blockExplorer {\n            name\n            identifier\n          }\n        }\n        id\n      }\n    }\n  }\n  discordUrl\n  externalUrl\n  instagramUsername\n  mediumUsername\n  telegramUrl\n  twitterUsername\n  connectedTwitterUsername\n  ...collection_url\n  ...CollectionWatchlistButton_data\n}\n\nfragment CollectionDescriptionMetadata_data on CollectionType {\n  statsV2 {\n    totalSupply\n  }\n  createdDate\n  totalCreatorFeeBasisPoints\n  defaultChain {\n    displayName\n    identifier\n  }\n}\n\nfragment CollectionInfoInner_data on CollectionType {\n  isCollectionOffersEnabled\n  description\n  name\n  ...collection_url\n  ...collection_stats\n  ...CollectionDescriptionMetadata_data\n}\n\nfragment CollectionInfo_data on CollectionType {\n  slug\n  ...CollectionInfoInner_data\n}\n\nfragment CollectionLink_assetContract on AssetContractType {\n  address\n  blockExplorerLink\n}\n\nfragment CollectionLink_collection on CollectionType {\n  name\n  slug\n  verificationStatus\n  ...collection_url\n}\n\nfragment CollectionPageHead_collection on CollectionType {\n  name\n  description\n  slug\n  owner {\n    address\n    displayName\n    id\n  }\n  ...collection_url\n}\n\nfragment CollectionPageLayout_collection on CollectionType {\n  slug\n  name\n  imageUrl\n  bannerImageUrl\n  verificationStatus\n  owner {\n    address\n    ...AccountLink_data\n    id\n  }\n  representativeAsset {\n    assetContract {\n      openseaVersion\n      id\n    }\n    id\n  }\n  ...CollectionActionBar_data\n  ...CollectionInfo_data\n  ...CollectionSocialBar_data\n  ...CollectionTabs_collection\n}\n\nfragment CollectionSocialBar_data on CollectionType {\n  assetContracts(first: 2) {\n    edges {\n      node {\n        address\n        blockExplorerLink\n        chainData {\n          blockExplorer {\n            name\n            identifier\n          }\n        }\n        id\n      }\n    }\n  }\n  discordUrl\n  externalUrl\n  instagramUsername\n  mediumUsername\n  telegramUrl\n  twitterUsername\n  connectedDiscordGuildId\n  connectedTwitterUsername\n  connectedInstagramUsername\n}\n\nfragment CollectionTabs_collection on CollectionType {\n  ...useIsAnalyticsTabEnabled_collection\n}\n\nfragment CollectionWatchlistButton_data on CollectionType {\n  relayId\n}\n\nfragment ItemAddToCartButton_order on OrderV2Type {\n  maker {\n    address\n    id\n  }\n  item {\n    __typename\n    ...itemEvents_dataV2\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  openedAt\n  ...ShoppingCartContextProvider_inline_order\n}\n\nfragment ItemCardAnnotations_27d9G3 on ItemType {\n  __isItemType: __typename\n  __typename\n  chain {\n    identifier\n  }\n  ... on AssetType {\n    isDelisted\n    ...AssetCardBuyNow_data\n    orderData {\n      bestAskV2 {\n        ...AddToCartAndQuickBuyButton_order\n        orderType\n        maker {\n          address\n          id\n        }\n        id\n      }\n    }\n    ...AssetContextMenu_data @include(if: $showContextMenu)\n  }\n  ... on AssetBundleType {\n    orderData {\n      bestAskV2 {\n        ...AddToCartAndQuickBuyButton_order\n        orderType\n        maker {\n          address\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment ItemCardContent_2V84VL on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    relayId\n    name\n    ...AssetMedia_asset_2V84VL\n  }\n  ... on AssetBundleType {\n    assetQuantities(first: 18) {\n      edges {\n        node {\n          asset {\n            relayId\n            ...AssetMedia_asset\n            id\n          }\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment ItemCardFooter_27d9G3 on ItemType {\n  __isItemType: __typename\n  name\n  orderData {\n    bestBidV2 {\n      orderType\n      priceType {\n        unit\n      }\n      ...PriceContainer_data\n      id\n    }\n    bestAskV2 {\n      orderType\n      priceType {\n        unit\n      }\n      maker {\n        address\n        id\n      }\n      ...PriceContainer_data\n      id\n      ...ItemAddToCartButton_order\n    }\n  }\n  ...ItemMetadata\n  ...ItemCardAnnotations_27d9G3\n  ... on AssetType {\n    tokenId\n    isDelisted\n    defaultRarityData {\n      ...RarityIndicator_data\n      id\n    }\n    collection {\n      slug\n      name\n      isVerified\n      ...collection_url\n      ...useIsRarityEnabled_collection\n      id\n    }\n    largestOwner {\n      owner {\n        ...AccountLink_data\n        id\n      }\n      id\n    }\n  }\n  ... on AssetBundleType {\n    bundleCollection: collection {\n      slug\n      name\n      isVerified\n      ...collection_url\n      ...useIsRarityEnabled_collection\n      id\n    }\n  }\n}\n\nfragment ItemCard_data_1OrK6u on ItemType {\n  __isItemType: __typename\n  __typename\n  relayId\n  chain {\n    identifier\n  }\n  orderData {\n    bestAskV2 {\n      priceType {\n        eth\n      }\n      id\n    }\n  }\n  ...ItemCardContent_2V84VL\n  ...ItemCardFooter_27d9G3\n  ...item_url\n  ... on AssetType {\n    isDelisted\n    ...itemEvents_data\n  }\n}\n\nfragment ItemMetadata on ItemType {\n  __isItemType: __typename\n  __typename\n  orderData {\n    bestAskV2 {\n      openedAt\n      closedAt\n      id\n    }\n    bestBidV2 {\n      ...PriceContainer_data\n      id\n    }\n  }\n  assetEventData {\n    lastSale {\n      unitPriceQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n}\n\nfragment NumericTraitFilter_data on NumericTraitTypePair {\n  key\n  value {\n    max\n    min\n  }\n}\n\nfragment OrderListItem_order on OrderV2Type {\n  relayId\n  item {\n    __typename\n    displayName\n    ... on AssetType {\n      assetContract {\n        ...CollectionLink_assetContract\n        id\n      }\n      collection {\n        slug\n        verificationStatus\n        ...CollectionLink_collection\n        id\n      }\n      ...AssetMedia_asset\n      ...asset_url\n      ...useItemFees_item\n    }\n    ... on AssetBundleType {\n      assetQuantities(first: 30) {\n        edges {\n          node {\n            asset {\n              displayName\n              relayId\n              assetContract {\n                ...CollectionLink_assetContract\n                id\n              }\n              collection {\n                slug\n                verificationStatus\n                ...CollectionLink_collection\n                id\n              }\n              ...StackedAssetMedia_assets\n              ...AssetMedia_asset\n              ...asset_url\n              id\n            }\n            id\n          }\n        }\n      }\n    }\n    ...itemEvents_dataV2\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  remainingQuantityType\n  ...OrderPrice\n}\n\nfragment OrderList_orders on OrderV2Type {\n  item {\n    __typename\n    ... on AssetType {\n      __typename\n      relayId\n    }\n    ... on AssetBundleType {\n      __typename\n      assetQuantities(first: 30) {\n        edges {\n          node {\n            asset {\n              relayId\n              id\n            }\n            id\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  relayId\n  ...useTotalItems_orders\n  ...OrderListItem_order\n}\n\nfragment OrderPrice on OrderV2Type {\n  priceType {\n    unit\n  }\n  perUnitPriceType {\n    unit\n  }\n  dutchAuctionFinalPriceType {\n    unit\n  }\n  openedAt\n  closedAt\n  payment {\n    ...TokenPricePayment\n    id\n  }\n}\n\nfragment PaymentFilter_data_2YoIWt on Query {\n  paymentAssets(first: 10) {\n    edges {\n      node {\n        symbol\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  PaymentFilter_collection: collection(collection: $collection) {\n    paymentAssets {\n      symbol\n      id\n    }\n    id\n  }\n}\n\nfragment PriceContainer_data on OrderV2Type {\n  ...OrderPrice\n}\n\nfragment Price_data on AssetType {\n  decimals\n  symbol\n  usdSpotPrice\n}\n\nfragment ProfileImage_data on AccountType {\n  imageUrl\n}\n\nfragment QuickBuyButton_order on OrderV2Type {\n  maker {\n    address\n    id\n  }\n  item {\n    __typename\n    chain {\n      identifier\n    }\n    ...itemEvents_dataV2\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  openedAt\n  relayId\n}\n\nfragment RarityFilter_data on CollectionType {\n  representativeRarityData {\n    maxRank\n    id\n  }\n}\n\nfragment RarityIndicator_data on RarityDataType {\n  rank\n  rankPercentile\n  rankCount\n  maxRank\n}\n\nfragment SearchPills_data_2Kg4Sq on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        imageUrl\n        name\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment ShoppingCartContextProvider_inline_order on OrderV2Type {\n  relayId\n  item {\n    __typename\n    chain {\n      identifier\n    }\n    relayId\n    ... on AssetBundleType {\n      assetQuantities(first: 30) {\n        edges {\n          node {\n            asset {\n              relayId\n              id\n            }\n            id\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  payment {\n    relayId\n    id\n  }\n  remainingQuantityType\n  ...useTotalItems_orders\n  ...ShoppingCart_orders\n}\n\nfragment ShoppingCartDetailedView_orders on OrderV2Type {\n  relayId\n  item {\n    __typename\n    chain {\n      identifier\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  supportsGiftingOnPurchase\n  ...useTotalPrice_orders\n  ...OrderList_orders\n}\n\nfragment ShoppingCartFooter_orders on OrderV2Type {\n  ...useTotalPrice_orders\n}\n\nfragment ShoppingCart_orders on OrderV2Type {\n  relayId\n  item {\n    __typename\n    relayId\n    chain {\n      identifier\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  payment {\n    relayId\n    symbol\n    id\n  }\n  ...ShoppingCartDetailedView_orders\n  ...ShoppingCartFooter_orders\n  ...useTotalPrice_orders\n}\n\nfragment StackedAssetMedia_assets on AssetType {\n  relayId\n  ...AssetMedia_asset\n  collection {\n    logo\n    id\n  }\n}\n\nfragment StringTraitFilter_data on StringTraitType {\n  counts {\n    count\n    value\n  }\n  key\n}\n\nfragment TokenPricePayment on PaymentAssetType {\n  symbol\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n\nfragment asset_edit_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n  collection {\n    slug\n    id\n  }\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    id\n  }\n  tokenId\n  chain {\n    identifier\n  }\n}\n\nfragment bundle_url on AssetBundleType {\n  slug\n  chain {\n    identifier\n  }\n}\n\nfragment collection_stats on CollectionType {\n  statsV2 {\n    totalListed\n    numOwners\n    totalQuantity\n    totalSupply\n    totalVolume {\n      unit\n      symbol\n    }\n    floorPrice {\n      unit\n      symbol\n    }\n  }\n  collectionOffers(first: 1) {\n    edges {\n      node {\n        perUnitPriceType {\n          unit\n          symbol\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n\nfragment itemEvents_data on AssetType {\n  relayId\n  assetContract {\n    address\n    id\n  }\n  tokenId\n  chain {\n    identifier\n  }\n}\n\nfragment itemEvents_dataV2 on ItemType {\n  __isItemType: __typename\n  relayId\n  chain {\n    identifier\n  }\n  ... on AssetType {\n    tokenId\n    assetContract {\n      address\n      id\n    }\n  }\n}\n\nfragment item_url on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    ...asset_url\n  }\n  ... on AssetBundleType {\n    ...bundle_url\n  }\n}\n\nfragment readItemHasBestAsk_item on ItemType {\n  __isItemType: __typename\n  orderData {\n    bestAskV2 {\n      __typename\n      id\n    }\n  }\n}\n\nfragment useCollectionItemsPolling_data_2YoIWt on Query {\n  collection(collection: $collection) {\n    isEligibleForFastPolling\n    id\n  }\n}\n\nfragment useIsAnalyticsTabEnabled_collection on CollectionType {\n  defaultChain {\n    identifier\n  }\n  statsV2 {\n    totalQuantity\n  }\n}\n\nfragment useIsQuickBuyEnabled_order on OrderV2Type {\n  item {\n    __typename\n    ... on AssetType {\n      collection {\n        verificationStatus\n        id\n      }\n      isCurrentlyFungible\n    }\n    ... on AssetBundleType {\n      bundleCollection: collection {\n        verificationStatus\n        id\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment useIsRarityEnabled_collection on CollectionType {\n  slug\n  enabledRarities\n}\n\nfragment useItemFees_item on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    openseaSellerFeeBasisPoints\n    totalCreatorFee\n  }\n  ... on AssetBundleType {\n    bundleCollection: collection {\n      openseaSellerFeeBasisPoints\n      totalCreatorFeeBasisPoints\n      id\n    }\n  }\n}\n\nfragment useTotalItems_orders on OrderV2Type {\n  item {\n    __typename\n    relayId\n    ... on AssetBundleType {\n      assetQuantities(first: 30) {\n        edges {\n          node {\n            asset {\n              relayId\n              id\n            }\n            id\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment useTotalPrice_orders on OrderV2Type {\n  relayId\n  perUnitPriceType {\n    usd\n    unit\n  }\n  dutchAuctionFinalPriceType {\n    usd\n    unit\n  }\n  openedAt\n  closedAt\n  payment {\n    symbol\n    ...TokenPricePayment\n    id\n  }\n}\n\nfragment wallet_accountKey on AccountType {\n  address\n}\n"
                    }
                }
            }();
            a.hash = "ae99d506057c1b2291cdbc4dca5d3414", e.default = a
        },
        45635: function(n, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return S
                }
            });
            var a = l(23842),
                t = l(85034),
                i = l(3204),
                s = l(35230),
                r = l.n(s),
                o = l(24246),
                d = l(27378),
                c = l(86677),
                u = l.n(c),
                y = l(58883),
                m = l(32220),
                g = l(72242),
                p = l(96150),
                k = l(68283),
                T = l(88747),
                _ = l(86676),
                A = (l(59809), l(13309)),
                f = l(70884),
                F = l(46323),
                C = l(6063),
                K = function(n) {
                    var e, l, a, t, s = n.data,
                        r = n.variables,
                        c = n.assetCardVariant,
                        u = (0, d.useState)(c),
                        A = u[0],
                        f = u[1],
                        K = !!(null === s || void 0 === s || null === (e = s.collection) || void 0 === e ? void 0 : e.isCollectionOffersEnabled),
                        S = (0, T.P5)("collection-items-list-view"),
                        I = (0, m.$1)(null !== (t = null === s || void 0 === s ? void 0 : s.collection) && void 0 !== t ? t : null);
                    (0, d.useEffect)((function() {
                        var n;
                        (null === s || void 0 === s || null === (n = s.collection) || void 0 === n ? void 0 : n.verificationStatus) && (0, _.k_)({
                            tab: void 0,
                            collectionSlug: r.collection,
                            verificationStatus: s.collection.verificationStatus,
                            enabledRarities: (0, i.Z)(s.collection.enabledRarities)
                        })
                    }), [null === s || void 0 === s || null === (l = s.collection) || void 0 === l ? void 0 : l.verificationStatus, null === s || void 0 === s || null === (a = s.collection) || void 0 === a ? void 0 : a.enabledRarities, r.collection]);
                    var L = "list-view" !== A || S ? A : "compact";
                    return (0, o.jsx)(k.d, {
                        initialSidebarOpen: !!L && "list-view" !== L,
                        isCollectionRarityEnabled: I,
                        isListViewEnabled: S,
                        children: (0, o.jsxs)(g.v, {
                            hideFooter: !0,
                            children: [(0, o.jsx)(F.Z, {
                                dataKey: null === s || void 0 === s ? void 0 : s.collection,
                                showTwitterMetadata: !0
                            }), (0, o.jsx)(p.k, {
                                children: (0, o.jsx)(C.r, {
                                    dataKey: null === s || void 0 === s ? void 0 : s.collection,
                                    children: (0, o.jsx)(y.dW, {
                                        cardVariant: L,
                                        dataKey: s,
                                        defaultState: {
                                            resultModel: "ASSETS"
                                        },
                                        fixedState: {
                                            collection: r.collection,
                                            collections: r.collections
                                        },
                                        initialState: r,
                                        resultsClassName: "collection--results",
                                        setCardVariant: f,
                                        showMakeOfferButton: K
                                    })
                                })
                            })]
                        })
                    })
                };
            K.query = l(50847), K.cachePolicy = {
                maxAge: 10,
                revalidate: 20
            }, K.getInitialProps = A.Z.nextParser({
                collectionSlug: A.Z.string,
                search: A.Z.Optional(A.Z.Search)
            }, function() {
                var n = (0, a.Z)(r().mark((function n(e, l) {
                    var a, i, s;
                    return r().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return a = e.collectionSlug, i = e.search, (f.h[a] || f.j4.find((function(n) {
                                    return n === a
                                }))) && (s = "/category/".concat(a), l.res ? (l.res.writeHead(302, {
                                    Location: s
                                }), l.res.end()) : u().push(s)), n.abrupt("return", {
                                    assetCardVariant: (0, y.tV)(l),
                                    variables: (0, t.Z)({
                                        collection: a,
                                        collections: [a],
                                        showContextMenu: !0,
                                        sortBy: "UNIT_PRICE",
                                        sortAscending: !0,
                                        resultModel: "ASSETS",
                                        includeCollectionFilter: !1,
                                        prioritizeBuyNow: !0
                                    }, i)
                                });
                            case 4:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })));
                return function(e, l) {
                    return n.apply(this, arguments)
                }
            }());
            var S = K
        }
    },
    function(n) {
        n.O(0, [48891, 50114, 28263, 23384, 57157, 73483, 68656, 79037, 15514, 1388, 36422, 4560, 40173, 90416, 44040, 58883, 65682, 49774, 92888, 40179], (function() {
            return e = 84966, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);
//# sourceMappingURL=[collectionSlug]-3668d335ebef2a04.js.map