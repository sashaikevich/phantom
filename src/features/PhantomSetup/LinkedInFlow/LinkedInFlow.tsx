import React from "react"
import { PhantomHeader } from "../PhantomHeader"
import { ViewToggle } from "../ViewToggle"

import { Section } from "../Section"

import { LaunchControls } from "../LaunchControls"

import {
  SearchGroup,
  LinkedInMsgGroup,
  ConnectLinkedInGroup,
  ProxyGroup,
  JSONGroup,
  SalesNavigatorGroup,
  OutreachLimitsGroup,
  ExecutionLimitsGroup,
  ExtractionLimitsGroup,
  DataManGroup,
  NotificationGroup,
} from "../GroupedInputs"
import { InfoBox } from "../../../components"

import { useViewContext } from "../../../contexts/viewContext"
import { useSetupContext } from "../../../contexts/setupContext"

export const LinkedInFlow = () => {
  const { viewModes, activeView, changeView } = useViewContext()

  const { updateField, data } = useSetupContext()

  return (
    <main className="tw-py-8 tw-px-28 tw-max-w-5xl">
      <PhantomHeader />
      <ViewToggle viewModes={viewModes} />

      {activeView === "json" ? (
        <Section heading="JSON">
          <JSONGroup />
        </Section>
      ) : (
        <>
          <Section heading="Search Settings">
            <SearchGroup />

            <LinkedInMsgGroup />

            <ConnectLinkedInGroup />
          </Section>
          <Section
            heading={`${activeView === "all" ? "All " : ""}Automation Settings`}
          >
            <InfoBox variant="notice" className="tw-mb-12">
              You must stay logged into LinkedIn for this flow to run. (You may
              close your browser, but not log out.)
            </InfoBox>

            <SalesNavigatorGroup />

            <OutreachLimitsGroup />

            {activeView === "all" && (
              <>
                <ExtractionLimitsGroup />

                <ExecutionLimitsGroup />

                <DataManGroup />
              </>
            )}
          </Section>
          {activeView === "all" && (
            <Section heading="Proxy Settings">
              <ProxyGroup />
            </Section>
          )}

          <Section heading="Notification Settings">
            <NotificationGroup />
          </Section>
        </>
      )}
      <LaunchControls />
    </main>
  )
}
