<template>
  <v-container>
    <progress-step :step="1" />
    <v-row class="my-4" justify="center">
      <h1 class="primary--text text-center px-4">
        ขั้นตอนที่ 1: เลือกผู้ร่วมวงเล่นกิจกรรม
      </h1>
    </v-row>
    <v-row class="workspace">
      <v-col cols="6" sm="6">
        <v-card id="card-band">
          <v-container class="py-sm-6 px-sm-8">
            <h1 class="text-h5 charcoal--text">กดเลือกผู้เล่น</h1>
            <v-row class="mt-4" style="min-height: 55rem" align-content="start">
              <v-col
                cols="12"
                sm="6"
                v-for="player in (players || []).filter(
                  (player) => (player.selectedCount || 0) < maxDevicePlayer
                )"
                :key="player.id"
              >
                <avatar-tile
                  :title="player.name"
                  :src="
                    player.imageUrl ||
                    require('@/assets/images/user-placeholder.svg')
                  "
                  clickable
                  @click="selectPlayer(player)"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col id="card-selected" cols="6" sm="6" class="card fill-height">
        <v-card class="selectedPanel" :class="{ editModePanel: editMode }">
          <v-container class="py-sm-6 px-sm-8">
            <v-row class="ma-0" justify="space-between" align="baseline">
              <span>
                <span class="text-h5 charcoal--text">ผู้เล่นที่ถูกเลือก</span>
                <span class="title shadow--text ml-2">
                  ({{ selectedPlayers.length }}/8 คน)
                </span>
              </span>
              <v-btn color="primary" outlined @click="editMode = !editMode">
                <v-icon left>
                  {{ editMode ? "mdi-check" : "mdi-pencil" }}
                </v-icon>
                {{ editMode ? "เสร็จสิ้น" : "แก้ไข" }}
              </v-btn>
            </v-row>
            <v-row
              class="mt-2"
              v-if="selectedPlayers.length > 0"
              style="min-height: 55rem"
              align-content="start"
            >
              <v-col
                cols="12"
                sm="6"
                v-for="(player, index) in selectedPlayers"
                :key="index"
              >
                <avatar-tile
                  :showDeleteButton="editMode"
                  :title="player.name"
                  :src="
                    player.imageUrl ||
                    require('@/assets/images/user-placeholder.svg')
                  "
                  @onDelete="removePlayer(index, player)"
                />
              </v-col>
            </v-row>
            <v-row
              v-else
              class="my-8 empty-list-placeholder"
              justify="center"
              align="center"
            >
              <img :src="require('@/assets/images/team-placeholder.svg')" />
              <span class="text-center title shadow--text"
                >ยังไม่มีผู้เล่นที่ถูกเลือก
                กรุณาเลือกผู้เล่นจากด้านซ้ายมือ</span
              >
            </v-row>
          </v-container>
        </v-card>
        <v-card id="card-bottom-panel" class="pa-4 d-flex d-md-none">
          <v-btn
            :disabled="selectedPlayers.length === 0"
            large
            block
            color="primary"
            @click="$router.replace({ name: 'pickSong' })"
            >ขั้นตอนถัดไป</v-btn
          >
        </v-card>
        <v-card
          id="card-bottom-panel"
          class="pa-4 d-none d-md-flex d-lg-none"
          style="width: 425px"
        >
          <v-btn
            :disabled="selectedPlayers.length === 0"
            large
            block
            color="primary"
            @click="$router.replace({ name: 'pickSong' })"
            >ขั้นตอนถัดไป</v-btn
          >
        </v-card>
        <v-card
          id="card-bottom-panel"
          class="pa-4 d-none d-lg-flex d-xl-none"
          style="width: 570px"
        >
          <v-btn
            :disabled="selectedPlayers.length === 0"
            large
            block
            color="primary"
            @click="$router.replace({ name: 'pickSong' })"
            >ขั้นตอนถัดไป</v-btn
          >
        </v-card>
        <v-card
          id="card-bottom-panel"
          class="pa-4 d-none d-xl-flex"
          style="width: 870px"
        >
          <v-btn
            :disabled="selectedPlayers.length === 0"
            large
            block
            color="primary"
            @click="$router.replace({ name: 'pickSong' })"
            >ขั้นตอนถัดไป</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
    <progress-dialog v-model="isLoading" message="กำลังโหลด..." />
  </v-container>
</template>
<script>
import { FETCH_PLAYER_LIST, ERROR, SELECT_PLAYERS } from "@/store/actions.type";
import ProgressStep from "@/components/ProgressStep.vue";
import ProgressDialog from "@/components/ProgressDialog.vue";
import AvatarTile from "@/components/AvatarTile.vue";

export default {
  components: { ProgressStep, AvatarTile, ProgressDialog },
  computed: {
    maxDevicePlayer: () => 1,
  },
  data() {
    return {
      editMode: false,
      isLoading: false,
      players: [],
      selectedPlayers: [],
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      this.isLoading = true;
      try {
        this.players = await this.$store.dispatch(FETCH_PLAYER_LIST, true);
      } catch (error) {
        this.$store.dispatch(ERROR, "เกิดข้อผิดพลาด");
      }
      this.isLoading = false;
    },
    selectPlayer(player) {
      if (this.selectedPlayers.length < 8) {
        player.selectedCount
          ? (player.selectedCount += 1)
          : (player.selectedCount = 1);

        this.$store.dispatch(SELECT_PLAYERS, this.selectedPlayers);
        this.selectedPlayers.push(player);
      } else {
        this.$store.dispatch(ERROR, "เลือกครบ 8 คนแล้ว");
      }
    },
    removePlayer(index, removedPlayer) {
      const player = this.players.find((p) => p.id === removedPlayer.id);
      if (player) player.selectedCount -= 1;
      this.selectedPlayers.splice(index, 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.v-stepper {
  background: none;
  box-shadow: none;
}
.workspace {
  padding-bottom: 7rem;
}
#card-band {
  background: #edeceb;
  min-height: 50rem;
}

#card-selected {
  position: relative;
}

#card-bottom-panel {
  position: fixed;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  bottom: 0;
  left: 50%;
  right: 0;
  margin-left: 12px;
  margin-right: 12px;
  /* transform: translate(-50%, 0); */
}

.selectedPanel {
  background: #e1ecef;
  min-height: 50rem;
}
.editModePanel {
  background: #f6e6bf !important;
}
.empty-list-placeholder {
  padding-top: 2rem;
  padding-bottom: 5rem;
}
</style>