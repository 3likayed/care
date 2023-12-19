<script setup>
import {computed, ref} from "vue";
import {useMainStore} from "../../Stores/main.js";
import {mdiEye, mdiTrashCan} from "@mdi/js";
import CardBoxModal from "./CardBoxModal.vue";
import TableCheckboxCell from "./TableCheckboxCell.vue";
import BaseLevel from "./BaseLevel.vue";
import BaseButtons from "./BaseButtons.vue";
import BaseButton from "./BaseButton.vue";
import UserAvatar from "./UserAvatar.vue";

defineProps({
    checkable: Boolean,
});

const mainStore = useMainStore();

const items = computed(() => mainStore.clients);

const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const perPage = ref(5);

const currentPage = ref(0);

const checkedRows = ref([]);

const itemsPaginated = computed(() =>
    items.value.slice(
        perPage.value * currentPage.value,
        perPage.value * (currentPage.value + 1)
    )
);

const numPages = computed(() => Math.ceil(items.value.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
    const pagesList = [];

    for (let i = 0; i < numPages.value; i++) {
        pagesList.push(i);
    }

    return pagesList;
});

const remove = (arr, cb) => {
    const newArr = [];

    arr.forEach((item) => {
        if (!cb(item)) {
            newArr.push(item);
        }
    });

    return newArr;
};

const checked = (isChecked, client) => {
    if (isChecked) {
        checkedRows.value.push(client);
    } else {
        checkedRows.value = remove(
            checkedRows.value,
            (row) => row.id === client.id
        );
    }
};
</script>

<template>
    <CardBoxModal :is-dirty="form.isDirty"
        v-model="isModalActive"
        title="Sample modal"
    >
        <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
        <p>This is sample modal</p>
    </CardBoxModal>
    <CardBoxModal :is-dirty="form.isDirty"
        v-model="isModalDangerActive"
        button="danger"
        has-cancel
        title="Please confirm"
    >
        <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
        <p>This is sample modal</p>
    </CardBoxModal>

    <div
        v-if="checkedRows.length"
        class="p-3 bg-gray-100/50 dark:bg-slate-800"
    >
    <span
        v-for="checkedRow in checkedRows"
        :key="checkedRow.id"
        class="inline-block px-2 py-1 rounded-sm ms-2 text-sm bg-gray-100 dark:bg-slate-700"
    >
      {{ checkedRow.name }}
    </span>
    </div>

    <table>
        <thead>
        <tr>
            <th v-if="checkable"/>
            <th/>
            <th>Name</th>
            <th>Company</th>
            <th>City</th>
            <th>Progress</th>
            <th>Created</th>
            <th/>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="client in itemsPaginated"
            :key="client.id"
        >
            <TableCheckboxCell
                v-if="checkable"
                @checked="checked($event, client)"
            />
            <td class="border-b-0 lg:w-6 before:hidden">
                <UserAvatar
                    :username="client.name"
                    class="w-24 h-24 mx-auto lg:w-6 lg:h-6"
                />
            </td>
            <td data-label="Name">
                {{ client.name }}
            </td>
            <td data-label="Company">
                {{ client.company }}
            </td>
            <td data-label="City">
                {{ client.city }}
            </td>
            <td
                class="lg:w-32"
                data-label="Progress"
            >
                <progress
                    :value="client.progress"
                    class="flex w-2/5 self-center lg:w-full"
                    max="100"
                >
                    {{ client.progress }}
                </progress>
            </td>
            <td
                class="lg:w-1 whitespace-nowrap"
                data-label="Created"
            >
                <small
                    :title="client.created"
                    class="text-gray-500 dark:text-slate-400"
                >{{ client.created }}</small>
            </td>
            <td class="before:hidden lg:w-1 whitespace-nowrap">
                <BaseButtons
                    no-wrap
                    type="justify-end lg:justify-start"
                >
                    <BaseButton
                        :icon="mdiEye"
                        color="info"
                        small
                        @click="isModalActive = true"
                    />
                    <BaseButton
                        :icon="mdiTrashCan"
                        color="danger"
                        small
                        @click="isModalDangerActive = true"
                    />
                </BaseButtons>
            </td>
        </tr>
        </tbody>
    </table>
    <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <BaseLevel>
            <BaseButtons>
                <BaseButton
                    v-for="page in pagesList"
                    :key="page"
                    :active="page === currentPage"
                    :color="page === currentPage ? 'lightDark' : 'whiteDark'"
                    :label="page + 1"
                    small
                    @click="currentPage = page"
                />
            </BaseButtons>
            <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
        </BaseLevel>
    </div>
</template>
