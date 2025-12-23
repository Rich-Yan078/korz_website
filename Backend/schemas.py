from pydantic import BaseModel,EmailStr,Field
from typing import Optional

class MessageRequest(BaseModel):
    name: str =Field()
    email:EmailStr
    number:int
    message:Optional[str]