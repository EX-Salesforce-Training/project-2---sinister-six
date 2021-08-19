<aura:application extends="force:slds">
    <div class="slds-grid">
    	<div class="slds-col slds-size_2-of-7">
            <c:userInfo />
            <c:todayInfo />
            <c:createOpportunity/>
        </div>
        <div class="slds-col slds-size_5-of-7">
            <c:items />
        </div>
    </div>
</aura:application>