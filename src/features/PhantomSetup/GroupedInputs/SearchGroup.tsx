import React from "react"
import { InputText } from "../Inputs"
import { CalloutBox } from "../CalloutBox"
import { Text } from "../Text"

import { useSetupContext } from "../../../contexts/setupContext"

export const SearchGroup = () => {
  const { data, updateField } = useSetupContext()
  const isSpreadsheet = data["searchTerm"].indexOf("sheet") >= 0
  return (
    <>
      <InputText
        label="Your search"
        mappedName="searchTerm"
        helpLink={{ text: "Learn how to run multiple searches" }}
        placeholder="https://www.linkedin.com/search/results/people/?keywords=..."
      />

      <CalloutBox
        isVisible={isSpreadsheet}
        className="tw-py-1 tw--mt-3 tw-mb-9"
      >
        <div className="tw-flex tw-items-center ">
          <Text>
            Spreadsheet detected; Please select the
            <span className="tw-font-bold tw-not-italic tw-ml-1 ">
              data column
            </span>
            :
          </Text>
          <select
            id="column"
            name="dataColumn"
            value={data["dataColumn"]}
            onChange={e => {
              updateField("dataColumn", e.target.value)
            }}
            className="tw-block tw-w-36 tw-rounded-md tw-py-1 tw-ml-2 tw-border-redi-placeholder"
          >
            <option disabled value="">
              column
            </option>
            <option value="A">Oct. Li Searches</option>
            <option value="B">Assigned to</option>
            <option value="C">Lead Health</option>
          </select>
        </div>
      </CalloutBox>
    </>
  )
}
