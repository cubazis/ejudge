/* -*- mode: c -*- */

/* Copyright (C) 2010-2016 Alexander Chernov <cher@ejudge.ru> */

/*
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */

#include "checker_internal.h"

#include <errno.h>

#include "l10n_impl.h"

int
checker_read_int_ex(
        FILE *f,
        checker_error_func_t error_func,
        const char *name,
        int eof_error_flag,
        int *p_val)
{
  char sbuf[128] = { 0 };
  char *dbuf = 0;
  size_t dsize = 0;
  char *vbuf = 0;
  char *eptr = 0;
  long val;

  if (!name) name = "";

  vbuf = checker_read_buf_ex(f, error_func, name, eof_error_flag,
                             sbuf, sizeof(sbuf), &dbuf, &dsize);
  if (!vbuf) return -1;
  if (!*vbuf) error_func(_("%s: no int32 value"), name);
  errno = 0;
  val = strtol(vbuf, &eptr, 10);
  if (*eptr) error_func(_("%s: cannot parse int32 value"), name);
  if (errno || (int) val != val) error_func(_("%s: int32 value is out of range"), name);
  free(dbuf); dbuf = 0;
  *p_val = val;
  return 1;
}
