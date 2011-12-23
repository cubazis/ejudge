/* -*- mode: java; coding: utf-8 -*- */
// $Id$

// Copyright (C) 2008-2011 Alexander Chernov <cher@ejudge.ru>

// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

function ssFieldRequest(op, field_id, next_op)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op,
        "field_id": field_id
      },
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else {
          // reload this page
          document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + next_op;
        }
      }
  });
}

function ssFieldRequest2(op, item_id, field_id, next_op)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op,
        "item_id": item_id,
        "field_id": field_id
      },
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else {
          // reload this page
          document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + next_op;
        }
      }
  });
}

function doFieldRequestWithField(op, field_id, next_op)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op,
        "field_id": field_id
      },
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else {
          // reload this page
          document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + next_op + "&field_id=" + field_id;
        }
      }
  });
}

function ssEditField(op, field_id, next_op, value)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op,
        "field_id": field_id,
        "value": value
      },
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else if (data.status > 0) {
          // reload this page
          document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + next_op;
        }
      }
  });
}

function ssEditField2(op, field_id, subfield_id, next_op, value)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op,
        "field_id": field_id,
        "subfield_id": subfield_id,
        "value": value
      },
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else if (data.status > 0) {
          // reload this page
          document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + next_op;
        }
      }
  });
}

function ssEditField3(op, field_id, subfield_id, next_op, value)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op,
        "field_id": field_id,
        "subfield_id": subfield_id,
        "value": value
      },
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else if (data.status > 0) {
          // reload this page
          document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + next_op + "&field_id=" + field_id;
        }
      }
  });
}

function ssEditField4(op, item_id, field_id, next_op, value)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op,
        "item_id": item_id,
        "field_id": field_id,
        "value": value
      },
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else if (data.status > 0) {
          // reload this page
          document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + next_op;
        }
      }
  });
}

function ssEditField5(op, item_id, field_id, subfield_id, next_op, value)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op,
        "item_id": item_id,
        "field_id": field_id,
        "subfield_id": subfield_id,
        "value": value
      },
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else if (data.status > 0) {
          // reload this page
          document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + next_op;
        }
      }
  });
}

function editFileSave(form_id, op, field_id, next_op)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op,
        "field_id": field_id
      },
      form : form_id,
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else if (data.status > 0) {
          document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + next_op;
        }
      }
  });
}

function ssEditFileSave2(form_id, op, item_id, field_id, next_op)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op,
        "item_id": item_id,
        "field_id": field_id
      },
      form : form_id,
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else if (data.status > 0) {
          document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + next_op;
        }
      }
  });
}

function editFileClear(op, field_id, next_op)
{
  doFieldRequestWithField(op, field_id, next_op);
}

function editFileReload(op, field_id, next_op)
{
  doFieldRequestWithField(op, field_id, next_op);
}

function ssLoad1(op)
{
  document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + op;
}

function ssLoad2(op, field_id)
{
  document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + op + "&field_id=" + field_id;
}

function ssLoad3(op, item_id, field_id)
{
  document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + op + "&item_id=" + item_id + "&field_id=" + field_id;
}

function ssFormOp1(form_id, op, next_op)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op
      },
      form : form_id,
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else if (data.status > 0) {
          document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + next_op;
        }
      }
  });
}

function ssFormOp2(form_id, op, field_id, next_op)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op,
        "field_id": field_id
      },
      form : form_id,
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else if (data.status > 0) {
          document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + next_op;
        }
      }
  });
}

function ssTopLevel()
{
  document.location.href = script_name + "?SID=" + SID;
}

function ssSetValue2(op, field_id, next_op, value)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op,
        "field_id": field_id,
        "value": value
      },
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else if (data.status > 0) {
          // reload this page
          document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + next_op + "&field_id=" + field_id;
        }
      }
  });
}

function ssSetValue3(op, item_id, field_id, next_op, value)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op,
        "item_id": item_id,
        "field_id": field_id,
        "value": value
      },
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else if (data.status > 0) {
          // reload this page
          document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + next_op;
        }
      }
  });
}

function ssSetHiddenMask(hidden_id, op, value)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op,
        "value": value
      },
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else {
          dojo.byId(hidden_id).value = value;
        }
      }
  });
}

function ssFormOp3(form_id, op, field_id, next_op)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op,
        "field_id": field_id
      },
      form : form_id,
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else if (data.status > 0) {
          document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + next_op + "&field_id=" + field_id;
        }
      }
  });
}

function ssFieldCmd3(op, field_id, subfield_id, next_op)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op,
        "field_id": field_id,
        "subfield_id": subfield_id
      },
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else {
          // reload this page
          document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + next_op + "&field_id=" + field_id;
        }
      }
  });
}

function ssForgetContest(op)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op
      },
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else {
          // reload this page
          document.location.href = script_name + "?SID=" + SID;
        }
      }
  });
}

function ssCommitContest(action)
{
  document.location.href = script_name + "?SID=" + SID + "&action=" + action;
}

function ssEditPage(op, page)
{
  document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + op + "&page=" + page;
}

function ssPackage(op, pkg)
{
  document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + op + "&package=" + pkg;
}

function ssPackageOp(op, next_op, pkg, item)
{
  dojo.xhrPost({
      url: script_name,
      content: {
        "SID": SID,
        "action": SSERV_CMD_HTTP_REQUEST,
        "op": op,
        "package": pkg,
        "item": item
      },
      handleAs: "json",
      error: function(data, ioargs) {
        alert("Request failed: " + data);
      },
      load: function(data, ioargs) {
        if (data.status < 0) {
          alert("Operation failed: " + data.text);
        } else if (data.status > 0) {
          // reload this page
          document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + next_op + "&package=" + pkg;
        }
      }
  });
}

function ssEditProblem(op, pkg, name)
{
  document.location.href = script_name + "?SID=" + SID + "&action=" + SSERV_CMD_HTTP_REQUEST + "&op=" + op + "&package=" + pkg + "&name=" + name;
}

function markLine(line)
{
  var obj = document.forms["run_comment"].elements["msg_text"];
  if (obj != null) {
    if (obj.value.length != 0 && obj.value.charAt(obj.value.length - 1) != '\n') obj.value += '\n';
  }
  obj.value += "Строка " + line + "\n";
}

function formatViolation()
{
  var obj = document.forms["run_comment"].elements["msg_text"];
  if (obj != null) {
    if (obj.value.length != 0 && obj.value.charAt(obj.value.length - 1) != '\n') obj.value += '\n';
  }
  obj.value += "Нарушение правил оформления программ\n";
}

function ej_change_stat(run_id, status)
{
  if (status == 100) {
    var d = document.getElementById('ej_dd_' + run_id);
    if (d == null) return;
    d.style.display = "none";
    return;
  }

  document.location.href = self_url + "?SID=" + SID + "&action=CHANGE_STATUS" + "&run_id=" + run_id + "&status=" + status;
}

var ej_valid_statuses =
{
  100 : "No change",
  99 : "Rejudge",
  95 : "Full rejudge",
  0  : "OK",
  9  : "Ignored",
  10 : "Disqualified",
  14 : "Coding style violation",
  6  : "Check failed",
  11 : "Pending check",
  7  : "Partial solution",
  8  : "Accepted for testing",
  1  : "Compilation error",
  2  : "Run-time error",
  3  : "Time-limit exceeded",
  4  : "Presentation error",
  5  : "Wrong answer",
  12 : "Memory limit exceeded",
  13 : "Security violation"
}

function ej_stat(run_id)
{
  var d = document.getElementById('ej_dd_' + run_id);
  if (d == null) return;
  if (d.style.display == "block") {
    d.style.display = "none";
    return;
  }
  d.style.display = "block";
  if (d.childNodes.length >= 1) {
    return;
  }
  var b = document.createElement("b");
  var t = document.createTextNode("Change result of run " + run_id);
  var a = null;
  b.appendChild(t);
  d.appendChild(b);
  for (var p in ej_valid_statuses) {
    d.appendChild(document.createElement("br"));
    d.appendChild(document.createTextNode("["));
    b = document.createElement("a");
    a = document.createAttribute("href");
    a.value = "javascript:ej_change_stat(" + run_id + "," + p + ")";
    b.setAttributeNode(a);
    b.appendChild(document.createTextNode(ej_valid_statuses[p]));
    d.appendChild(b);
    d.appendChild(document.createTextNode("]"));
  }
}
