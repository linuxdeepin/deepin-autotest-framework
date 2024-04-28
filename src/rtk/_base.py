#!/usr/bin/env python3
# _*_ coding:utf-8 _*_
import json
# SPDX-FileCopyrightText: 2023 UnionTech Software Technology Co., Ltd.

# SPDX-License-Identifier: GPL-2.0-only
# pylint: disable=C0114
import os
from collections import Counter
from enum import Enum
from enum import unique
from os.path import exists

from setting import conf
from setting.globalconfig import GlobalConfig
from src import sleep


# pylint: disable=C0103


@unique
class SubCmd(Enum):
    """SubCmd"""
    run = "run"
    remote = "remote"
    pmsctl = "pmsctl"
    csvctl = "csvctl"
    startapp = "startapp"
    git = "git"


@unique
class Args(Enum):
    """Args"""
    app_name = "app_name"
    keywords = "keywords"
    tags = "tags"
    reruns = "reruns"
    record_failed_case = "record_failed_case"
    clean = "clean"
    report_formats = "report_formats"
    max_fail = "max_fail"
    log_level = "log_level"
    timeout = "timeout"
    debug = "debug"
    noskip = "noskip"
    ifixed = "ifixed"
    send_pms = "send_pms"
    task_id = "task_id"
    trigger = "trigger"
    resolution = "resolution"
    case_file = "case_file"
    branch = "branch"
    deb_path = "deb_path"
    pms_user = "pms_user"
    pms_password = "pms_password"
    suite_id = "suite_id"
    pms_info_file = "pms_info_file"
    top = "top"
    lastfailed = "lastfailed"
    duringfail = "duringfail"
    repeat = "repeat"
    project_name = "project_name"
    build_location = "build_location"
    line = "line"
    clients = "clients"
    send_code = "send_code"
    build_env = "build_env"
    client_password = "client_password"
    parallel = "parallel"
    autostart = "autostart"
    pyid2csv = "pyid2csv"
    export_csv_file = "export_csv_file"
    pms2csv = "pms2csv"
    pms_link_csv = "pms_link_csv"
    send2task = "send2task"
    url = "url"
    startdate = "startdate"
    enddate = "enddate"
    user = "user"
    password = "password"
    depth = "depth"
    slaves = "slaves"


def transform_app_name(app_name):
    """转换 app_name"""
    if not app_name:
        return None
    if "-" in app_name:
        raise ValueError(f"{app_name} 中存在 ['-'] 符号")
    if app_name.startswith("apps/"):
        app_name = app_name.replace("apps/", "").strip("/")
    for dir_name in os.listdir(conf.APPS_PATH):
        if dir_name == app_name:
            return app_name
    raise NotADirectoryError(f"{app_name} 目录不存在")


def collect_result(results):
    res = Counter([results.get(i).get("result") for i in results])
    total = sum(res.values())
    skiped = res.get("skip", 0)
    total = total - skiped
    passed = res.get("pass", 0)
    failed = total - passed
    pass_rate = f"{round((passed / total) * 100, 1)}%" if passed else "0%"
    return total, failed, passed, skiped, pass_rate

def get_result(ci_result):
    with open(ci_result, "r", encoding="utf-8") as _f:
        results_dict = json.load(_f)
    return collect_result(results_dict)


def write_json(project_name=None, build_location=None, line=None):
    json_tpl_path = f"{GlobalConfig.SETTING_PATH}/template/ci.json"
    if not exists(json_tpl_path):
        raise FileNotFoundError
    with open(json_tpl_path, "r", encoding="utf-8") as _f:
        results = json.load(_f)

    results["project_name"] = project_name
    results["build_location"] = build_location
    results["line"] = line
    ci_result_path = f"{GlobalConfig.ROOT_DIR}/ci_result.json"
    if not exists(ci_result_path):
        return

    (
        results["total"],
        results["fail"],
        results["pass"],
        results["skip"],
        results["pass_rate"],
    ) = get_result(ci_result_path)

    json_res_path = f"{GlobalConfig.ROOT_DIR}/{project_name}_at.json"
    with open(json_res_path, "w+", encoding="utf-8") as _f:
        _f.write(json.dumps(results, indent=2, ensure_ascii=False))
    sleep(1)
    with open(json_res_path, "r", encoding="utf-8") as _f:
        print("CICD数据结果:\n", _f.read())
