<script setup>
import SectionFullScreen from "../Components/Sahred/SectionFullScreen.vue";
import CardBox from "../Components/Sahred/CardBox.vue";
import BaseButton from "../Components/Sahred/BaseButton.vue";
import BaseButtons from "../Components/Sahred/BaseButtons.vue";
import LayoutGuest from "../Layouts/LayoutGuest.vue";
</script>

<template>
    <LayoutGuest>
        <SectionFullScreen
            v-slot="{ cardClass }"
            bg="pinkRed"
        >
            <CardBox :class="cardClass">
                <div class="space-y-3">
                    <h1 class="text-2xl">
                        Unhandled exception
                    </h1>

                    <p>An Error Occurred</p>
                </div>

                <template #footer>
                    <BaseButtons>
                        <BaseButton
                            color="danger"
                            label="Done"
                            to="/dashboard"
                        />
                    </BaseButtons>
                </template>
            </CardBox>
        </SectionFullScreen>
    </LayoutGuest>
</template>
