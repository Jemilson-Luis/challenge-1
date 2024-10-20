import { HttpContextToken } from "@angular/common/http";

export const Caching_enabled = new HttpContextToken<boolean>(()=> true)
