//
// Copyright (C) 2017 Nethesis S.r.l.
// http://www.nethesis.it - nethserver@nethesis.it
//
// This script is part of NethServer.
//
// NethServer is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License,
// or any later version.
//
// NethServer is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with NethServer.  If not, see COPYING.
//

function edit_onsubmit() {
	defaultEmptyOK = false;
        if (!$.trim($('#mysql_host').val()).length)
			return warnInvalid($('#mysql_host'), "Please enter a valid MySQL Host name");

        if (!$.trim($('#mysql_dbname').val()).length)
			return warnInvalid($('#mysql_dbname'), "Please enter a valid MySQL Database name");

        if (!$.trim($('#mysql_query').val()).length)
			return warnInvalid($('#mysql_query'), "Please enter a valid MySQL Query string");

        if (!$.trim($('#mysql_username').val()).length)
			return warnInvalid($('#mysql_username'), "Please enter a valid MySQL Username");
	return true;
}
