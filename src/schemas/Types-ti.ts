/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const RectSize = t.iface([], {
  "width": "number",
  "height": "number",
});

export const Vector2D = t.iface([], {
  "x": "number",
  "y": "number",
});

export const point = t.union(t.lit('0'), t.lit('1'), t.lit('D1'), t.lit('T1'), t.lit('2'), t.lit('D2'), t.lit('T2'), t.lit('3'), t.lit('D3'), t.lit('T3'), t.lit('4'), t.lit('D4'), t.lit('T4'), t.lit('5'), t.lit('D5'), t.lit('T5'), t.lit('6'), t.lit('D6'), t.lit('T6'), t.lit('7'), t.lit('D7'), t.lit('T7'), t.lit('8'), t.lit('D8'), t.lit('T8'), t.lit('9'), t.lit('D9'), t.lit('T9'), t.lit('10'), t.lit('D10'), t.lit('T10'), t.lit('11'), t.lit('D11'), t.lit('T11'), t.lit('12'), t.lit('D12'), t.lit('T12'), t.lit('13'), t.lit('D13'), t.lit('T13'), t.lit('14'), t.lit('D14'), t.lit('T14'), t.lit('15'), t.lit('D15'), t.lit('T15'), t.lit('16'), t.lit('D16'), t.lit('T16'), t.lit('17'), t.lit('D17'), t.lit('T17'), t.lit('18'), t.lit('D18'), t.lit('T18'), t.lit('19'), t.lit('D19'), t.lit('T19'), t.lit('20'), t.lit('D20'), t.lit('T20'), t.lit('S-BULL'), t.lit('D-BULL'), t.lit('OUT'));

export const Game = t.iface([], {
  "addScore": t.func("void", t.param("score", "point")),
  "removeScore": t.func("void"),
  "getRoundScore": t.func(t.array("point")),
  "getScore": t.func(t.array(t.array("point"))),
  "roundChange": t.func("void"),
  "isFinished": t.func("boolean"),
});

export const GameData = t.iface([], {
  "resumeGame": t.func("void", t.param("progress", "T")),
  "getGameProgress": t.func("T"),
  "getGameResult": t.func("U"),
});

export const CricketMarkUpProgress = t.iface([], {
  "targetCount": "number",
  "round": t.array("point"),
  "score": t.array(t.array("point")),
});

export const EaglesEyeProgress = t.iface([], {
  "round": t.array("point"),
  "score": t.array(t.array("point")),
});

export const DoubleTroubleProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
});

export const BullyBullyProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const Sweet16Progress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const TopsAndTensProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const TwoDartCombinationsProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
});

export const AroundTheCompassProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const TonsUpProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const Route64Progress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const EightyThrewProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const ShanghaiNightsProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const SwitchHitterProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const TreblesForShowProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "round": "number",
});

export const ArrangeProgress = t.iface([], {
  "roundScore": t.array("point"),
  "score": t.array(t.array("point")),
  "vector": t.array("Vector2D"),
  "targetOutCount": "number",
  "targets": t.array("number"),
  "settings": "ArrangeSettings",
});

export const OutOption = t.union(t.lit('double'), t.lit('single'), t.lit('master'));

export const RangeAxis = t.iface([], {
  "x": "number",
  "y": "number",
});

export const ArrangeSettings = t.iface([], {
  "targets": t.opt(t.array("number")),
  "out": "OutOption",
  "range": "RangeAxis",
  "simulation": "boolean",
  "separate": "boolean",
  "hard": "boolean",
  "game": "boolean",
});

export const CountUpProgress = t.iface([], {
  "round": t.union("number", "null"),
  "score": t.array("number"),
});

export const GameResult = t.iface([], {
  "cricketMarkUp": t.opt(t.array("CricketMarkUpResult")),
  "eaglesEye": t.opt(t.array("EaglesEyeResult")),
  "doubleTrouble": t.opt(t.array("DoubleTroubleResult")),
  "sweet16": t.opt(t.array("Sweet16Result")),
  "topsAndTens": t.opt(t.array("TopsAndTensResult")),
  "twoDartCombinations": t.opt(t.array("TwoDartCombinationsResult")),
  "aroundTheCompass": t.opt(t.array("AroundTheCompassResult")),
  "tonsUp": t.opt(t.array("TonsUpResult")),
  "route64": t.opt(t.array("Route64Result")),
  "eightyThrew": t.opt(t.array("EightyThrewResult")),
  "shanghaiNights": t.opt(t.array("ShanghaiNightsResult")),
  "switchHitter": t.opt(t.array("SwitchHitterResult")),
  "bullyBully": t.opt(t.array("BullyBullyResult")),
  "treblesForShow": t.opt(t.array("TreblesForShowResult")),
  "countUp": t.opt(t.array("CountUpResult")),
});

export const CricketMarkUpResult = t.iface([], {
  "targetCount": "number",
  "result": "number",
  "scores": t.array("CricketMarkUpScore"),
  "playedAt": "string",
});

export const CricketMarkUpScore = t.iface([], {
  "number": "number",
  "count": "number",
  "total": "number",
});

export const EaglesEyeResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "playedAt": "string",
});

export const DoubleTroubleResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "playedAt": "string",
});

export const Sweet16Result = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const TopsAndTensResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "playedAt": "string",
});

export const TwoDartCombinationsResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "playedAt": "string",
});

export const AroundTheCompassResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const TonsUpResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const Route64Result = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const EightyThrewResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const ShanghaiNightsResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const SwitchHitterResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const BullyBullyResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const TreblesForShowResult = t.iface([], {
  "result": "number",
  "scores": t.array(t.array("point")),
  "round": "number",
  "playedAt": "string",
});

export const ArrangeResult = t.iface([], {
  "result": t.array("ArrangeOut"),
  "settings": "ArrangeSettings",
  "playedAt": "string",
});

export const ArrangeOut = t.iface([], {
  "target": "number",
  "score": t.array(t.array("point")),
});

export const CountUpResult = t.iface([], {
  "result": "number",
  "scores": t.array("number"),
  "playedAt": "string",
});

export const ResultModel = t.iface([], {
  "id": t.opt("number"),
  "uuid": "string",
});

export const CricketMarkUpResultModel = t.iface(["ResultModel", "CricketMarkUpResult"], {
});

export const EaglesEyeResultModel = t.iface(["ResultModel", "EaglesEyeResult"], {
});

export const DoubleTroubleResultModel = t.iface(["ResultModel", "DoubleTroubleResult"], {
});

export const Sweet16ResultModel = t.iface(["ResultModel", "Sweet16Result"], {
});

export const TopsAndTensResultModel = t.iface(["ResultModel", "TopsAndTensResult"], {
});

export const TwoDartCombinationsResultModel = t.iface(["ResultModel", "TwoDartCombinationsResult"], {
});

export const AroundTheCompassResultModel = t.iface(["ResultModel", "AroundTheCompassResult"], {
});

export const TonsUpResultModel = t.iface(["ResultModel", "TonsUpResult"], {
});

export const Route64ResultModel = t.iface(["ResultModel", "Route64Result"], {
});

export const EightyThrewResultModel = t.iface(["ResultModel", "EightyThrewResult"], {
});

export const ShanghaiNightsResultModel = t.iface(["ResultModel", "ShanghaiNightsResult"], {
});

export const SwitchHitterResultModel = t.iface(["ResultModel", "SwitchHitterResult"], {
});

export const BullyBullyResultModel = t.iface(["ResultModel", "BullyBullyResult"], {
});

export const TreblesForShowResultModel = t.iface(["ResultModel", "TreblesForShowResult"], {
});

export const ArrangeResultModel = t.iface(["ResultModel", "ArrangeResult"], {
});

export const CountUpResultModel = t.iface(["ResultModel", "CountUpResult"], {
});

export const GameResultModel = t.iface([], {
  "cricketMarkUp": t.opt(t.array("CricketMarkUpResultModel")),
  "eaglesEye": t.opt(t.array("EaglesEyeResultModel")),
  "doubleTrouble": t.opt(t.array("DoubleTroubleResultModel")),
  "sweet16": t.opt(t.array("Sweet16ResultModel")),
  "topsAndTens": t.opt(t.array("TopsAndTensResultModel")),
  "twoDartCombinations": t.opt(t.array("TwoDartCombinationsResultModel")),
  "aroundTheCompass": t.opt(t.array("AroundTheCompassResultModel")),
  "tonsUp": t.opt(t.array("TonsUpResultModel")),
  "route64": t.opt(t.array("Route64ResultModel")),
  "eightyThrew": t.opt(t.array("EightyThrewResultModel")),
  "shanghaiNights": t.opt(t.array("ShanghaiNightsResultModel")),
  "switchHitter": t.opt(t.array("SwitchHitterResultModel")),
  "bullyBully": t.opt(t.array("BullyBullyResultModel")),
  "treblesForShow": t.opt(t.array("TreblesForShowResultModel")),
  "arrange": t.opt(t.array("ArrangeResultModel")),
  "countUp": t.opt(t.array("CountUpResultModel")),
});

export const RespectResult = t.iface([], {
  "companies": t.array("WebsiteResult"),
  "professionals": t.array("WebsiteResult"),
  "youtube": t.array("WebsiteResult"),
});

export const WebsiteResult = t.iface([], {
  "title": t.union("string", "null"),
  "image": t.union("string", "null"),
  "description": t.union("string", "null"),
  "url": t.union("string", "null"),
  "type": t.union("string", "null"),
});

export const GameScore = t.iface([], {
  "Scored": "string",
  "ToGo": "string",
  "Hits": t.union(t.array(t.union("point", t.lit('-'))), "null"),
});

export const FirebaseUser = t.iface([], {
  "id": "string",
  "name": "string",
  "photoURL": "string",
  "email": "string",
  "history": "GameResultModelFirebase",
  "createdAt": "number",
});

export const User = t.iface([], {
  "id": "string",
  "name": "string",
  "photoURL": "string",
  "email": "string",
  "history": "GameResultModel",
  "createdAt": "number",
});

export const FirebaseScore = t.iface([], {
  "round": "number",
  "score": t.array("point"),
});

export const GameResultModelFirebase = t.iface([], {
  "cricketMarkUp": t.opt(t.array("CricketMarkUpResultModel")),
  "eaglesEye": t.opt(t.array(t.intersection("any", t.iface([], {
    "scores": t.array("FirebaseScore"),
  })))),
  "doubleTrouble": t.opt(t.array(t.intersection("any", t.iface([], {
    "scores": t.array("FirebaseScore"),
  })))),
  "sweet16": t.opt(t.array(t.intersection("any", t.iface([], {
    "scores": t.array("FirebaseScore"),
  })))),
  "topsAndTens": t.opt(t.array(t.intersection("any", t.iface([], {
    "scores": t.array("FirebaseScore"),
  })))),
  "twoDartCombinations": t.opt(t.array(t.intersection("any", t.iface([], {
    "scores": t.array("FirebaseScore"),
  })))),
  "aroundTheCompass": t.opt(t.array(t.intersection("any", t.iface([], {
    "scores": t.array("FirebaseScore"),
  })))),
  "tonsUp": t.opt(t.array(t.intersection("any", t.iface([], {
    "scores": t.array("FirebaseScore"),
  })))),
  "route64": t.opt(t.array(t.intersection("any", t.iface([], {
    "scores": t.array("FirebaseScore"),
  })))),
  "eightyThrew": t.opt(t.array(t.intersection("any", t.iface([], {
    "scores": t.array("FirebaseScore"),
  })))),
  "shanghaiNights": t.opt(t.array(t.intersection("any", t.iface([], {
    "scores": t.array("FirebaseScore"),
  })))),
  "switchHitter": t.opt(t.array(t.intersection("any", t.iface([], {
    "scores": t.array("FirebaseScore"),
  })))),
  "bullyBully": t.opt(t.array(t.intersection("any", t.iface([], {
    "scores": t.array("FirebaseScore"),
  })))),
  "treblesForShow": t.opt(t.array(t.intersection("any", t.iface([], {
    "scores": t.array("FirebaseScore"),
  })))),
  "countUp": t.opt(t.array("CountUpResultModel")),
});

export const Window = t.iface([], {
  "adsbygoogle": t.opt(t.array(t.iface([], {
    [t.indexKey]: "unknown",
  }))),
});

const exportedTypeSuite: t.ITypeSuite = {
  RectSize,
  Vector2D,
  point,
  Game,
  GameData,
  CricketMarkUpProgress,
  EaglesEyeProgress,
  DoubleTroubleProgress,
  BullyBullyProgress,
  Sweet16Progress,
  TopsAndTensProgress,
  TwoDartCombinationsProgress,
  AroundTheCompassProgress,
  TonsUpProgress,
  Route64Progress,
  EightyThrewProgress,
  ShanghaiNightsProgress,
  SwitchHitterProgress,
  TreblesForShowProgress,
  ArrangeProgress,
  OutOption,
  RangeAxis,
  ArrangeSettings,
  CountUpProgress,
  GameResult,
  CricketMarkUpResult,
  CricketMarkUpScore,
  EaglesEyeResult,
  DoubleTroubleResult,
  Sweet16Result,
  TopsAndTensResult,
  TwoDartCombinationsResult,
  AroundTheCompassResult,
  TonsUpResult,
  Route64Result,
  EightyThrewResult,
  ShanghaiNightsResult,
  SwitchHitterResult,
  BullyBullyResult,
  TreblesForShowResult,
  ArrangeResult,
  ArrangeOut,
  CountUpResult,
  ResultModel,
  CricketMarkUpResultModel,
  EaglesEyeResultModel,
  DoubleTroubleResultModel,
  Sweet16ResultModel,
  TopsAndTensResultModel,
  TwoDartCombinationsResultModel,
  AroundTheCompassResultModel,
  TonsUpResultModel,
  Route64ResultModel,
  EightyThrewResultModel,
  ShanghaiNightsResultModel,
  SwitchHitterResultModel,
  BullyBullyResultModel,
  TreblesForShowResultModel,
  ArrangeResultModel,
  CountUpResultModel,
  GameResultModel,
  RespectResult,
  WebsiteResult,
  GameScore,
  FirebaseUser,
  User,
  FirebaseScore,
  GameResultModelFirebase,
  Window,
};
export default exportedTypeSuite;
