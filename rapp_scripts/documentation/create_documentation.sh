#!/bin/bash -i

#Copyright 2015 RAPP

#Licensed under the Apache License, Version 2.0 (the "License");
#you may not use this file except in compliance with the License.
#You may obtain a copy of the License at

    #http://www.apache.org/licenses/LICENSE-2.0

#Unless required by applicable law or agreed to in writing, software
#distributed under the License is distributed on an "AS IS" BASIS,
#WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#See the License for the specific language governing permissions and
#limitations under the License.

# Authors: Aris Thallas
# Contact: aris.thallas@{iti.gr, gmail.com}

echo -e "\e[1m\e[103m\e[31m[RAPP] Creating Source Documentation\e[0m"
./create_source_documentation.sh
echo -e "\e[1m\e[103m\e[31m[RAPP] Creating Wiki Documentation\e[0m"
./create_wiki_documentation.sh
echo -e "\e[1m\e[103m\e[31m[RAPP] Creating Test Documentation\e[0m"
./create_test_documentation.py
echo -e "\e[1m\e[103m\e[31m[RAPP] Creating Web Services Documentation\e[0m"
./create_web_services_documentation.sh
